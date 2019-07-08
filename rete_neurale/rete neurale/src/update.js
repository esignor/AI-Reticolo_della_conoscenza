
/** @function update
 * @param {*} dim dimensione di input e output della rete
 * funzione che ha il compito di effettuare l'apprendimento della rete
 */
function update(ArrayInput, dim) { // permette di fare il training del dato
    printTextarea(layer_exe, "\n\nRete in addestramento...")
    eval($("#layerdef").val()); // mi serve per attivare train
   


    //apprendimento della rete
    var x = new convnetjs.Vol(1, 1, dim); // parametri passati alla rete (larghezza, altezza, profondita'), inoltro in questo modo un punto attraverso la rete

    for (var it = 0; it < 25; ++it) { // faccio apprendere alla rete meglio il pattern
        for (var n = 0; n < ArrayInput.length; ++n) {
            for (var ix = 0; ix < dim; ix++) {
                x.w[ix] = ArrayInput[n][ix]; // gli passo l'input
            }
            trainer.train(x, ArrayInput[n]); // inizia ad imparare che per quel dato vettore in input vale l'output passato (tecnica dell'autoencoder);
        }
    }

}