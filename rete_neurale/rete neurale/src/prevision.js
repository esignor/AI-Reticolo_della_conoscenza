
/** @function prevision
 * metodo che ha il compito, data un id di domanda nella form di input, di prevedere se il candidato, in base a cio' che la rete ha imparato sara' in grado di 
 * rispondervi o meno
 */
function prevision() {
    // stampa di connessione della rete
    layer_exe = layer_exe + "\n\Richiesta di previsione inoltrata alla rete ...";
    $("#layerexe").val(layer_exe);


    var net = new convnetjs.Net();

    // dati per effettuare la previsione sulla rete
    net.makeLayers(layer_defs);
    var x = new convnetjs.Vol(1, 1, 6);


    var vettore_previsione = document.getElementsByClassName("vettore_input"); // per avere il contenuto delle celle di dati
    for (var i = 0; i < vettore_previsione.length; i++) {
        var number = vettore_previsione[i].value;


            if (!controlValueInput(number)) //controllo che il valore inserito in input non sia vuoto
                return;
            x.w[i] = number; // salvo il contenuto anche nell'array necessario all'autoencoder
    }
    if(vettore_previsione.length == 0){  // entra quando carica random gli array dei dati
        x.w[0] = 0;
        x.w[1] = 1;
        x.w[2] = 0;
        x.w[3] = 0;
        x.w[4] = 0;
        x.w[5] = 0;
    }

    //altrimenti inserimento valido
    layer_exe = layer_exe + "\n\Richiesta di previsione accettata";
    $("#layerexe").val(layer_exe);

    //previsione della rete
    var scores = net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta;

    layer_exe = layer_exe + "\n\Il vettore [" + x.w[0] + "," + x.w[1] + "," + x.w[2] + "," + x.w[3] + "," + x.w[4] + "," + x.w[5] + "] ha previsione calcolata di [" + scores.w[0] + "," + scores.w[1] + "," + scores.w[2] + "," + scores.w[3] + "," + scores.w[4] + "," + scores.w[5] + "]" + "\n\Rete neurale in attesa ...";
    $("#layerexe").val(layer_exe);

}
