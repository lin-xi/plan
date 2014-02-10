app.service('util', function (){
    var DAY = 86400000;
	//日期格式化
    this.formatDate = function(dateObj, fmt){
        var year, month, date, hours, minutes, seconds;

        if (!dateObj) return;

        if (Object.prototype.toString.call(dateObj) == "[object Date]") {
            year = dateObj.getFullYear();
            month = dateObj.getMonth() + 1; 
            date = dateObj.getDate(); 
            hours = dateObj.getHours(); 
            minutes = dateObj.getMinutes(); 
            seconds = dateObj.getSeconds();
        } else {
            var regexp = /([\d]{4})-([\d]{2})-([\d]{2})T([\d]{2}):([\d]{2}):([\d]{2})(?:\+([\d]{2}):([\d]{2}))?/
            var d = regexp.exec(dateObj);
            if (!d) return;
            year = d[1], month=d[2], date=d[3], hours=d[4], minutes=d[5], seconds=d[6];
        }
        var o = {
            "M+": +month, //月份 
            "d+": +date, //日 
            "h+": +hours, //小时 
            "m+": +minutes, //分 
            "s+": +seconds, //秒 
            "q+": Math.floor((+month + 3) / 3) //季度 
            //"S": d.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (year + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    this.today = function(){
    	var d = new Date();
    	return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
    };

    this.yestoday = function(date){
        var d = date ? date : this.today();
        return new Date(d-DAY);
    };

    this.tomorrow = function(date){
        var d = date ? date : this.today();
    	return new Date(d-0+DAY);
    }



});