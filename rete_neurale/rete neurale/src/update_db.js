
/** @function update
 * funzione che ha il compito di effettuare l'apprendimento della rete
 */
function update() { // permette di fare il training del dato
    //stampa sul box di log
    layer_exe = layer_exe + "\n\Inizio allenamento della rete ...";
    $("#layerexe").val(layer_exe);

    eval($("#layerdef").val()); // mi serve per attivare train

    N = ArrayInput.length;

    //apprendimento della rete
    var x = new convnetjs.Vol(1, 1, 89); // parametri passati alla rete (larghezza, altezza, profondita'), inoltro in questo modo un punto attraverso la rete


    for (var ix = 0; ix < N; ix++) {

        x.w[ix] = ArrayInput[ix]; // gli passo l'input
    }
    trainer.train(x, ArrayOutput); // inizia ad imparare che per quel dato vettore in input vale l'output passato (tecnica dell'autoencoder)

    if (document.getElementById("button_trainer") && document.getElementById("button_prevision")) {
        document.getElementById("button_trainer").disabled = true;//disabilito il pulsante di apprendimento

        document.getElementById("button_prevision").style.display = "inline"; //fino a quando i dati non sono stati inseriti e non si e' dato il via al trainer non si puo' procedere alla previsione
        document.getElementById("box_vettore").style.display = "inline";
        document.getElementById("title_vettore").style.display = "inline";
    }



    ArrayInput = []; ArrayOutput = []; //array di supporto per il singolo test che devono essere vuoto per il prossimo set di dati

}