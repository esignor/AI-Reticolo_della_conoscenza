var ArrayInput = [];  //array di input da usare per l'allenamento dei dati
var ArrayOutput = []; //array do output indispensabile per l'autoencoder
var N = 0; //contratore dimesnione array

// codice della rete neurale
var layer_defs, layer_exe, net, trainer;
var t = "\n\
layer_defs = [];\n\
layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth:6});\n\
layer_defs.push({type:'fc', num_neurons:4, activation: 'tanh'});\n\
layer_defs.push({type:'fc', num_neurons:4, activation: 'tanh'});\n\
layer_defs.push({type:'regression', num_neurons:6});\n\
\n\
net = new convnetjs.Net();\n\
net.makeLayers(layer_defs);\n\
\n\
trainer = new convnetjs.SGDTrainer(net, {learning_rate:0.01, momentum:0.1, batch_size:10, l2_decay:0.001});\n\
";

// ho 6 output della rete, mi servono 6 neuroni

$(function () {  //  chiamata quando tutti gli elementi DOM della pagina sono pronti per essere usati

    $("#layerdef").val(t); // mostra la configurazione della rete nel primo box
    insertDati();
});








