'use strict';

app.TranslNucal = kendo.observable({
    onShow: function() {
        $("#TranslNucal_head_dummy").val("Toque para inserir o CCN");
    },
    afterShow: function() {}
});
app.localization.registerView('TranslNucal');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.TranslNucal.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
