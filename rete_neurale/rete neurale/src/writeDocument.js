/** @function writeDocument
 * il metodo ha lo scopo di stampare su browser i dati dell'addestramento
 */

function writeDocument() {
    for (var i = 0; i < vectorCSV.length; ++i)
        document.write(" Vettore di apprendimento " + i + ": [" + vectorCSV[i] + "] </br> </br>");
}