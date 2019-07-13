/** @function configure_db
 * metodo che permette la configurazione della rete neurale del database
 */


configure_db120 = function () {
    var value_rete = "\n\
    layer_defs = [];\n\
    layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth:120});\n\
    layer_defs.push({type:'fc', num_neurons:2, activation: 'tanh'});\n\
    layer_defs.push({type:'fc', num_neurons:6, activation: 'tanh'});\n\
    layer_defs.push({type:'fc', num_neurons:10, activation: 'tanh'});\n\
    layer_defs.push({type:'fc', num_neurons:10, activation: 'tanh'});\n\
    layer_defs.push({type:'regression', num_neurons:120});\n\
    \n\
    net = new convnetjs.Net();\n\
    net.makeLayers(layer_defs);\n\
    trainer = new convnetjs.SGDTrainer(net, {learning_rate:0.01, momentum:0.1, batch_size:10, l2_decay:0.001});\n\
    ";
    return value_rete;
}



configure_db89 = function () {
    var value_rete = "\n\
        layer_defs = [];\n\
        layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth:89});\n\
        layer_defs.push({type:'fc', num_neurons:2, activation: 'tanh'});\n\
        layer_defs.push({type:'fc', num_neurons:6, activation: 'tanh'});\n\
        layer_defs.push({type:'fc', num_neurons:10, activation: 'tanh'});\n\
        layer_defs.push({type:'fc', num_neurons:10, activation: 'tanh'});\n\
        layer_defs.push({type:'regression', num_neurons:89});\n\
        \n\
        net = new convnetjs.Net();\n\
        net.makeLayers(layer_defs);\n\
        trainer = new convnetjs.SGDTrainer(net, {learning_rate:0.01, momentum:0.1, batch_size:10, l2_decay:0.001});\n\
        ";

    return value_rete;
}