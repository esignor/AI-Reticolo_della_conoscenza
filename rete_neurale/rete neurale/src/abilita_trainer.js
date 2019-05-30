
/** @function abilita_trainer
 * metodo che ha il compito di abilitare la funzionalita' di apprendimento della rete
 */
function abilita_trainer() {
    if (ArrayInput[0] != "") { // controllo dei dati di allenameto, devono essere inseriti e salvati negli apposito array specifico
        document.getElementById("button_trainer").style.display = "inline"; // visualizzazione dei pulsanti
        document.getElementById("button_trainer").disabled = false;
    }
}

