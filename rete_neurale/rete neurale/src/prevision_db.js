
/** @function prevision
 * metodo che ha il compito, dato un vettore previsione delle domande, di prevedere come il candidato, in base a cio' che la rete ha imparat,o e' 
 * in grado di rispondere **/

function prevision() {
    // stampa di connessione della rete
    layer_exe = layer_exe + "\n\Richiesta di previsione inoltrata alla rete ...";
    $("#layerexe").val(layer_exe);
    document.getElementById("myCanvas").style.display = "none"; // fa scomparire il box canvas
    document.getElementById("myCanvas-detail").style.display = "none"; // fa scomparire il box canvas al dettaglio
    document.getElementById("title_questionsdetail").style.display = "none";//fa scomparire  il title introduttivo delle risposte al dettaglio

    var x = new convnetjs.Vol(1, 1, 89);

    var vettore_previsione = document.getElementsByClassName("vettore_input"); // per avere il contenuto delle celle di dati
    for (var i = 0; i < vettore_previsione.length; i++) {
        var number = vettore_previsione[i].value;
        x.w[i] = number; // salvo il contenuto anche nell'array necessario al metodo forward
        vectorPrevision[i] = number; // mi salvo la previsione richiesta
    }

    //previsione della rete
    var scores = net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta;

    layer_exe = layer_exe + "\n\Il vettore [" + x.w + "] ha previsione calcolata di [" + scores.w + "]" + "\n\Rete neurale in attesa ...";
    $("#layerexe").val(layer_exe);

    document.getElementById("myCanvas").style.display = "inline"; // faccio comparire il box con la previsione canvas
    animationPrevision_db(89, scores); // chiamata al metodo che crea il canvas;

}
