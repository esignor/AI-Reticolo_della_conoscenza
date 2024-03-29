
/** @function controlValueFields
 *  @param {*} number 
 *  metodo che ha il compito di controllare la validità del parametro passato alla funzione (relative all'inserimento nel numero di fields di input)
 * return true sse il parametro è di natura non vuota, intera e positiva e non superiore a 9999, altrimenti viene stampato a video un messaggio di errore
 * e viene ritornato false
 */


controlValueFields = function (number) {
    if (number == "" || isNaN(number) || parseInt(number) < 0 || parseInt(number) > 255) {
        alert("Inserire un numero intero positivo valido inferiore a 255 (massimo valore rgb possibile)");
        return false;
    }
    return true;
}
