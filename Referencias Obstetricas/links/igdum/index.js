'use strict';

app.igdum = kendo.observable({
    onShow: function() {
        $("#dum").val("Toque para inserir a data");
    },
    afterShow: function() {}
});
app.localization.registerView('igdum');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.igdum.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
