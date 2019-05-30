/** @function controlValueInput
 *  @param {number} number 
 *  metodo che ha il compito di controllare la validità del parametro passato alla funzione (relative all'inserimento nel box di input del valore della domanda)
 * return true sse il parametro è di natura non vuota, altrimenti viene stampato a video un messaggio di errore  e viene ritornato false
 */

function controlValueInput(number) {
    if (number == "") {
        alert("Inserire un numero intero valido");
        return false;
    }
    return true;
}