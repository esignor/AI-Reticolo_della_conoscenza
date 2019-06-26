
/** @function prevision
 * metodo che ha il compito, data un id di domanda nella form di input, di prevedere se il candidato, in base a cio' che la rete ha imparato sara' in grado di 
 * rispondervi o meno
 */
function prevision() {
    // stampa di connessione della rete
    layer_exe = layer_exe + "\n\Richiesta di previsione inoltrata alla rete ...";
    $("#layerexe").val(layer_exe);
    document.getElementById("myCanvas").style.display = "none"; // fa scomparire il box canvas
    document.getElementById("myCanvas-detail").style.display = "none"; // fa scomparire il box canvas al dettaglio
    document.getElementById("title_questionsdetail").style.display = "none";

    var x = new convnetjs.Vol(1, 1, 6);
    for (var i = 0; i < 6; i++) {
        var number =  $('input[name=risposta'+i+']:checked').val();
        x.w[i] = number; // salvo il contenuto anche nell'array necessario al metodo forward
        vectorPrevision[i] = number; // mi salvo la previsione richiesta
    }

    //previsione della rete
    var scores = net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta

    layer_exe = layer_exe + "\n\Il vettore [" + x.w + "] ha previsione calcolata di [" + scores.w + "]" + "\n\Rete neurale in attesa ...";
    $("#layerexe").val(layer_exe);

    document.getElementById("myCanvas").style.display = "inline"; // faccio comparire il box con la previsione canvas
    animationPrevision(scores, 6); // chiamata al metodo che crea il canvas

    vettoreReticolo(6);

}

  