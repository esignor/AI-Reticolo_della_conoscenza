var vectorPrevision = [];// vettore che memorizza il vettore previsione passato in input alla rete

// codice della rete neurale

var layer_defs, layer_exe, trainer, net;

$(function () {  //  chiamata quando tutti gli elementi DOM della pagina sono pronti per essere usati

  $("#layerdef").val(configure()); // mostra la configurazione della rete nel primo box

    // addestrmanento della rete di dimensione 6
    insertDati(); // per la rete di prova

});








