'use strict';

app.Tocolise = kendo.observable({
    onShow: function() {
        $("#Tocolise_head_dummy").val("Toque para inserir a altura");
        $("#Tocolise_head2_dummy").val("Toque para inserir a dilatação");
        $("#Tocolise_head3_dummy").val("Toque para inserir o apagamento");
        $("#Tocolise_head4_dummy").val("Toque para inserir a consistência");
        $("#Tocolise_head5_dummy").val("Toque para inserir a posição");
        $("#Tocolise_head6_dummy").val("Toque para inserir a posição");
    },
    afterShow: function() {}
});
app.localization.registerView('Tocolise');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.Tocolise.set('title', 'TocoliseTocolise_head');
})();





// END_CUSTOM_CODE_homeView
