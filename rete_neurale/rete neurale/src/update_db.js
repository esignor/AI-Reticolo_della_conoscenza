
/** @function update
 * funzione che ha il compito di effettuare l'apprendimento della rete
 */
function update() { // permette di fare il training del dato

    eval($("#layerdef").val()); // mi serve per attivare train

    //apprendimento della rete
    var x = new convnetjs.Vol(1, 1, 89); // parametri passati alla rete (larghezza, altezza, profondita'), inoltro in questo modo un punto attraverso la rete

    for (var it = 0; it < 25; ++it) { // faccio apprendere alla rete meglio il pattern
        for (var n = 0; n < vectorCSV.length; ++n) {
            for (var ix = 0; ix < 89; ++ix) {

                x.w[ix] = vectorCSV[n][ix]; // gli passo l'input
            }
            var scores = trainer.train(x, vectorCSV[n]); // inizia ad imparare che per quel dato vettore in input vale l'output passato (tecnica dell'autoencoder);
        }
    }
    document.getElementById("setter_numberfields").style.display = "inline"; // fa comparire link al fields
    document.getElementById("title_previsione").style.display = "block"; // fa comparire il titolo del box di previsione

}
