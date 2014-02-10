app.factory('plans', ['db', 'util', function (db, util){

    function create(){
        var table_sql = 'CREATE TABLE IF NOT EXISTS plans (id INTEGER PRIMARY KEY, content TEXT, status NUMERIC, type NUMERIC, fromDate NUMERIC, toDate NUMERIC, finishDate NUMERIC)';
        db.execute(table_sql, []);
    }
	
    function put(plan, fn) {
    	db.execute("INSERT INTO plans (content, type, status, fromDate, toDate, finishDate) VALUES (?, ?, ?, ?, ?, ?)", [plan.content, plan.type, plan.status, plan.fromDate, plan.toDate, plan.finishDate], function(tx, res) {
           fn && fn();
        }, function(tx, err){
            console.log(err);
        });
    }

    function get(day, fn){
    	db.execute('SELECT * FROM plans where fromDate = ?', [day], function(tx, res){
    		var result = [];
    		for(var i=0, ii=res.rows.length; i<ii; i++){
    			result.push(res.rows.item(i));
    		}
    		fn(result);
    	});
    }

    function remove(id, fn) {
        db.execute("DELETE FROM plans where id = ?", [id], function(tx, res) {
           fn && fn();
        });
    }

    function setStatus(id, status, fn){
        var finishDate = util.today();
        db.execute("UPDATE plans set status = ?, finishDate = ? where id = ?", [status, finishDate, id], function(tx, res) {
           fn && fn();
        });
    }

    return {
        create: create,
    	put: put,
    	get: get,
        remove: remove,
        setStatus: setStatus
    };
}]);