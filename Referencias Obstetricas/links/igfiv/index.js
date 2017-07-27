'use strict';

app.igfiv = kendo.observable({
    onShow: function() {
        $("#ig_fiv_extracao").val("Toque para inserir a data");
        $("#ig_fiv_tratamento_dummy").val("Toque para inserir o tratamento");
    },
    afterShow: function() {}
});
app.localization.registerView('igfiv');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.igfiv.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
