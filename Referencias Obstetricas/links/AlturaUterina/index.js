'use strict';

app.AlturaUterina = kendo.observable({
    onShow: function() {
        $("#AlturaUterina_head_dummy").val("Toque para inserir a idade gestacional");
    },
    afterShow: function() {}
});
app.localization.registerView('AlturaUterina');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.AlturaUterina.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
