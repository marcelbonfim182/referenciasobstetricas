'use strict';

app.igccn = kendo.observable({
    onShow: function() {
        $("#ig_ccn_head_dummy").val("Toque para inserir o comprimento");
    },
    afterShow: function() {}
});
app.localization.registerView('igccn');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.igccn.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
