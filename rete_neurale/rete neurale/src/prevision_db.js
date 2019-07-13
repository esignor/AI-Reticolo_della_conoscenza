
/** @function prevision
 * metodo che ha il compito, dato un vettore previsione delle domande, di prevedere come il candidato, in base a cio' che la rete ha imparat,o e' 
 * in grado di rispondere **/

function prevision() {
  if (!controlValueFields(document.getElementById("differenziale_1param").value) || !controlValueFields(document.getElementById("differenziale_2param").value) ||!controlValueFields(document.getElementById("differenziale_3param").value)) //controllo che il valore inserito sia un intero >= 0 non vuto
  return;

    // stampa di connessione della rete
    printTextarea(layer_exe,"\n\n\Richiesta di previsione inoltrata alla rete ...");
    document.getElementById("myCanvas").style.display = "none"; // fa scomparire il box canvas
    document.getElementById("myCanvas-detail").style.display = "none"; // fa scomparire il box canvas al dettaglio
    document.getElementById("title_questionsdetail").style.display = "none";//fa scomparire  il title introduttivo delle risposte al dettaglio

    var x = new convnetjs.Vol(1, 1, 120);

    for (var i = 0; i < 120; i++) {
        var number =  $('input[name=risposta'+i+']:checked').val();
        x.w[i] = number; // salvo il contenuto anche nell'array necessario al metodo forward
        vectorPrevision[i] = number; // mi salvo la previsione richiesta
    }

    //previsione della rete
    var scores = net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta;

    printTextarea(layer_exe, "\n\Il vettore [" + x.w + "] ha previsione calcolata di [" + scores.w + "]");

    document.getElementById("myCanvas").style.display = "inline"; // faccio comparire il box con la previsione canvas
    configureCanvasCoupling(scores, 120); // chiamata al metodo che crea il canvas;

    //vettoreReticolo(120); // usato in fase di test genera i dati basati sulle previsioni, da passare all'applicativo che costruisce il Reticolo della Conoscenza

}
