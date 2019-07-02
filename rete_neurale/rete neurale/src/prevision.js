
/** @function prevision
 * metodo che ha il compito, data un id di domanda nella form di input, di prevedere se il candidato, in base a cio' che la rete ha imparato sara' in grado di 
 * rispondervi o meno
 */
function prevision() {
    if (!controlValueFields(document.getElementById("differenziale_1param").value) || !controlValueFields(document.getElementById("differenziale_2param").value) ||!controlValueFields(document.getElementById("differenziale_3param").value)) //controllo che il valore inserito sia un intero >= 0 non vuto
        return;


    // stampa di connessione della rete
    printTextarea(layer_exe, "\n\n\Richiesta di previsione inoltrata alla rete ...");
    document.getElementById("myCanvas").style.display = "none"; // fa scomparire il box canvas
    document.getElementById("myCanvas-detail").style.display = "none"; // fa scomparire il box canvas al dettaglio
    document.getElementById("title_questionsdetail").style.display = "none";

    var x = new convnetjs.Vol(1, 1, 6);
    for (var i = 0; i < 6; i++) {
        var number = $('input[name=risposta' + i + ']:checked').val();
        x.w[i] = number; // salvo il contenuto anche nell'array necessario al metodo forward
        vectorPrevision[i] = number; // mi salvo la previsione richiesta
    }

    //previsione della rete
    var scores = net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta

    printTextarea(layer_exe, "\n\Il vettore [" + x.w + "] ha previsione calcolata di [" + scores.w + "]");

    document.getElementById("myCanvas").style.display = "inline"; // faccio comparire il box con la previsione canvas
    configureCanvasCoupling(scores, 6); // chiamata al metodo che crea il canvas

    vettoreReticolo(6);

}

