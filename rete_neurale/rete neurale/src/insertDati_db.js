/** @function insertDati
 * @param {*} dim dimensione dell'input e output dekka rete
 * inserimento dei dati per  compiere l'addestramento della rete
 */

function insertDati_db(dim) {
    for (var n = 0; n < vectorCSV.length; ++n) { // stampa dei vettori contenuti in vectorCSV

        printTextarea(layer_exe, "\n\Inserito vettore di risposta: " + "[");
        for(var i = 0; i < dim; ++i){
            printTextarea(layer_exe, vectorCSV[n][i]);
          if(i < dim - 1)
          printTextarea(layer_exe, ",");
        }
        
        printTextarea(layer_exe, "]");
    
    }

    update(dim) // chiamata all'addestramento
 
    var frequencePos = frequenceMatrixPos(vectorCSV, dim); // in uso per generare csv da passare all'applicativo per creare il Reticolo sui dati di frequenza 
    var frequenceNeg = frequenceMatrixNeg(vectorCSV, dim);
    /*console.log(frequencePos);
    console.log(frequenceNeg);*/

    document.getElementById("button_writedocument").style.display = "inline";  // si possono visulaizzare i dati di addestramento su una pagina del browser a parte
    document.getElementById("button_JSON").style.display = "inline"; // addestramento terminato si puo' creare il JSON
    document.getElementById("buttonLoad_JSON").style.display = "inline"; // addestramento terminato si puo' creare il JSON

}
