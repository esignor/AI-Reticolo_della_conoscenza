/** @function insertDati
 * inserimento dei dati per  compiere l'addestramento della rete
 */

function insertDati_db() {

    layer_exe = layer_exe + "\n\Inizilizzazione addestramento della rete"
    $("#layerexe").val(layer_exe);
   
    for (var n = 0; n < vectorCSV.length; ++n) { // faccio la stampare dei vettori contenuti in vectorCSV

        layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute " + "[" + vectorCSV[n]; + "]"
        $("#layerexe").val(layer_exe);
    
    }
    
    update(); // chiamata all'addestramento

    document.getElementById("button_writedocument").style.display = "inline";  // si possono visulaizzare i dati di addestramento su una pagina del browser a parte
    document.getElementById("button_JSON").style.display = "inline"; // addestramento terminato si puo' creare il JSON

}
