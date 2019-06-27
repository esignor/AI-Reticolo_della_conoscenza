var vectorCSV = []; // array che racchiude  tutti i vettori di addestramento generati da un file csv
// codice della rete neurale
var layer_defs, layer_exe, net, trainer;
var vectorPrevision = [];// vettore che memorizza il vettore previsione passato in input alla rete

$(function () {  //  chiamata quando tutti gli elementi DOM della pagina sono pronti per essere usati

    $("#layerdef").val(configure_db()); // mostra la configurazione della rete nel primo box

});








