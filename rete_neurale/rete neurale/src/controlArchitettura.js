/** function controlArchitettura
 * metodo che controlla che le mdifiche dell'architettura rigurdino esclusivamente il numero di neuroni per layer e il numero di layers
 */

// gli errori sul type input e sul type fc layers sono intercettati dirrettamente da convnetjs a causa della chiamata a makeLayers
controlArchitettura = function () {
    var event = true;
    if (layer_defs[0].type != "input") {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria type:"input"');
        event = false;
    }

    if (layer_defs[0].out_sx != 1) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria out_sx:1');
        event = false;
    }

    if (layer_defs[0].out_sy != 1) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria out_sy:1');
        event = false;
    }
    if (layer_defs[0].out_depth != 89) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria out_depth:89');
        event = false;
    }

    for (var i = 1; i < layer_defs.length - 1; ++i) {
        if (layer_defs[i].type != "fc") { // fully-connected
            alert('Modifica non valida architettura della Rete: Configurazione obbligatoria layer Fully-Connected (type = "fc")');
            event = false;
        }
    }

    if (layer_defs[layer_defs.length - 1].type != "regression") {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria type: "regression"');
        event = false;
    }
    if (layer_defs[layer_defs.length - 1].num_neurons != 89) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatororia num_neurons: 89');
        event = false;
    }
    if (trainer == null) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria trainer indefinito');
        event = false;
    }
    if (net == null) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria reti indefinito');
        event = false;
    }

    return event;
}
