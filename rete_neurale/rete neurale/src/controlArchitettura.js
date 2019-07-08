/** function controlArchitettura
 * metodo che controlla che le mdifiche dell'architettura rigurdino esclusivamente il numero di neuroni per layer e il numero di layers
 */
controlArchitettura = function () {
    document.getElementById("myCanvas-detail").style.display = "none";
    document.getElementById("myCanvas").style.display = "none";
    document.getElementById("title_questionsdetail").style.display = "none";
    document.getElementById("fileUpload").style.display = "none";
    document.getElementById("button_upload").style.display = "none";
    document.getElementById("button_JSON").style.display = "none";
    document.getElementById("buttonLoad_JSON").style.display = "none";
    document.getElementById("button_writedocument").style.display = "none";

    try { eval($("#layerdef").val()); } // permette di prendere come riferimento l'architettura espressa nella textarea
    catch (error) {
        alert(error.message);  // cattura gli errori provenienti da makeLayers
    }

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

    if (layer_defs[1].type == 'regression' && layer_defs[1].num_neurons == 89) {
        alert('Modifica non valida architettura della Rete: Configurazione obbligatoria con almeno 1 layer intemedio');
        event = false;
    }

    for (var i = 1; i < layer_defs.length - 1; ++i) {
        if (layer_defs[i].type != "fc") { // fully-connected
            alert('Modifica non valida architettura della Rete: Configurazione obbligatoria layer Fully-Connected (type = "fc")');
            event = false;
        }
        if (layer_defs[i].activation != "relu" && layer_defs[i].activation != "sigmoid" && layer_defs[i].activation != "tanh" && layer_defs[i].activation != 'maxout') { // fully-connected
            alert('Modifica non valida architettura della Rete: Configurazione per la funzione di attivazione sigmoid, relu, tanh o maxout');
            event = false;
        }

        if (layer_defs[i].num_neurons <= 0 || layer_defs[i].num_neurons == null) {
            alert('Modifica non valida architettura della Rete: Configurazione obbligatoria del numero di neuroni presenti su ciascun layer. Il numero di neuroni deve essere sempre definito e maggiore di 0');
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

    if (!event)//controllo della coerenza dell'architettura
        printTextarea(0, "Scegliere un'architettura che rispetti i vincoli.");
    else {
        document.getElementById("fileUpload").style.display = "inline";
        document.getElementById("button_upload").style.display = "inline";
        printTextarea(0, "Architettura che rispetti i vincoli. Procedere a caricare i dati");
    }
}
