'use strict';

app.igusg = kendo.observable({
    onShow: function() {
        $("#ig_usg").val("Toque para inserir a data");
        $("#ig_usgsemanas_dummy").val("Inserir semana");
        $("#ig_usgdias_dummy").val("Inserir dia");
    },
    afterShow: function() {}
});
app.localization.registerView('igusg');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.igusg.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
