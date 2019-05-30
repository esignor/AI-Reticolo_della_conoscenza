

/** @function formSubmit
 * metodo che ha il compito, una volta che l'utente ha premuto il pulsante di save di salvare i dati all'interno dell'array specifico
 *  (ArrayInput). Metodo che viene chiamato da addFields
 */
function formSubmit() {
    var x = document.getElementsByClassName("risposta_input"); // per avere il contenuto delle celle di dati
    for (var i = 0; i < x.length; i++) {
        var number = x[i].value;

        if (!controlValueInput(number)) //controllo che il valore inserito in input non sia vuoto
            return;

        ArrayInput[i] = number; // salvataggio del contenuto della cella in esame nell'array di supporto
        ArrayOutput[i] = number; // salvo il contenuto anche nell'array necessario all'autoencoder
    }
    // stampa dei risultati sul box di log
    layer_exe = layer_exe + "\n\Inserimento risposte alle domande del test andato a buon fine"
    $("#layerexe").val(layer_exe);
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);


    abilita_trainer(); // rendo accessibile il pulsante di allenamento


}
