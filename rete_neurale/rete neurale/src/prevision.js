
/** @function prevision
 * metodo che ha il compito, data un id di domanda nella form di input, di prevedere se il candidato, in base a cio' che la rete ha imparato sara' in grado di 
 * rispondervi o meno
 */
function prevision() {
    // stampa di connessione della rete
    layer_exe = layer_exe + "\n\Richiesta di previsione inoltrata alla rete ...";
    $("#layerexe").val(layer_exe);

    var x = new convnetjs.Vol(1, 1, 6);

    var vettore_previsione = document.getElementsByClassName("vettore_input"); // per avere il contenuto delle celle di dati
    for (var i = 0; i < vettore_previsione.length; i++) {
        var number = vettore_previsione[i].value;


            if (!controlValueInput(number)) //controllo che il valore inserito in input non sia vuoto
                return;
            x.w[i] = number; // salvo il contenuto anche nell'array necessario all'autoencoder
    }


    //previsione della rete
    net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta;

    layer_exe = layer_exe + "\n\Il vettore [" + x.w + "] ha previsione calcolata di [" + scores.w + "]" + "\n\Rete neurale in attesa ...";
    $("#layerexe").val(layer_exe);

    document.getElementById("myCanvas").style.display = "inline"; // faccio comparire il box con la previsione canvas
    animationPrevision(scores, 6); // creo il canvas

}