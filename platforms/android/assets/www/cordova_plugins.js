cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.sqlite/www/SQLitePlugin.js",
        "id": "com.phonegap.plugins.sqlite.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.5",
    "org.apache.cordova.dialogs": "0.2.4",
    "org.apache.cordova.vibration": "0.3.5",
    "org.apache.cordova.console": "0.2.5",
    "com.phonegap.plugins.sqlite": "1.0.0"
}
// BOTTOM OF METADATA
});