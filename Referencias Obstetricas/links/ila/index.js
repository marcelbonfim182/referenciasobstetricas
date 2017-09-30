'use strict';

app.ila = kendo.observable({
    onShow: function() {
        $("#ila_head_dummy").val("Toque para inserir a idade gestacional");
    },
    afterShow: function() {}
});
app.localization.registerView('ila');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.ila.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
