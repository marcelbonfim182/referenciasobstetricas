'use strict';

app.Bishop = kendo.observable({
    onShow: function() {
        $("#Bishop_head_dummy").val("Toque para inserir a altura");
        $("#Bishop_head2_dummy").val("Toque para inserir a dilatação");
        $("#Bishop_head3_dummy").val("Toque para inserir o apagamento");
        $("#Bishop_head4_dummy").val("Toque para inserir a consistência");
        $("#Bishop_head5_dummy").val("Toque para inserir a posição");
    },
    afterShow: function() {}
});
app.localization.registerView('Bishop');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.Bishop.set('title', 'Home teste');
})();





// END_CUSTOM_CODE_homeView
