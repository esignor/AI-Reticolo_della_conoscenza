var ArrayInput = [];  //array di input da usare per l'allenamento dei dati
var vectorPrevision = [];// vettore che memorizza il vettore previsione passato in input alla rete

// codice della rete neurale
var layer_defs, layer_exe, net, trainer;
// da configurare in base alla dimensione della rete
var t = "\n\
layer_defs = [];\n\
layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth: 6});\n\
layer_defs.push({type:'fc', num_neurons:2, activation: 'tanh'});\n\
layer_defs.push({type:'fc', num_neurons:2, activation: 'tanh'});\n\
layer_defs.push({type:'regression', num_neurons:6});\n\
\n\
net = new convnetjs.Net();\n\
net.makeLayers(layer_defs);\n\
\n\
trainer = new convnetjs.SGDTrainer(net, {learning_rate:0.01, momentum:0.1, batch_size:10, l2_decay:0.001});\n\
";
 


$(function () {  //  chiamata quando tutti gli elementi DOM della pagina sono pronti per essere usati

    $("#layerdef").val(t); // mostra la configurazione della rete nel primo box

    // addestrmanento della rete di dimensione 6
    insertDati(); // per la rete di prova

});








