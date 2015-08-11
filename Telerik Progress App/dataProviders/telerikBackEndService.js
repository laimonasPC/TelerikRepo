'use strict';

(function() {
    app.data.telerikBackEndService = new Everlive({
        offlineStorage: true,
        apiKey: 'g5zJhY8aWTeLIbJp',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener('online', function() {
        app.data.telerikBackEndService.offline(false);
        app.data.telerikBackEndService.sync();
    });

    document.addEventListener('offline', function() {
        app.data.telerikBackEndService.offline(true);
    });

}());

// START_CUSTOM_CODE_telerikBackEndService
// END_CUSTOM_CODE_telerikBackEndService