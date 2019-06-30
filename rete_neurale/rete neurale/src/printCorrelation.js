/**@function printCorrelation
 * @param {*} questionCluster vettore che contenete l'accoppiamento
 * @param {*} dim dimensione di input e output della rete
 il metodo si occupa di stampare il contenuto di questionCluster nella textarea dell'applicativo
 */
printCorrelation = function (questionCluster, dim) {

  printTextarea(layer_exe, "\n\Relazione fra le domande con un parametro differenziazione di: " + document.getElementById("differenziale").value);
  for (var i = 0; i < dim; ++i) {
    printTextarea(layer_exe, "\n" + questionCluster[i]);
  }
  if (dim == 0)
    printTextarea(layer_exe, "\Matrice di correlazione vuota - per parametro di differenziazione " + document.getElementById("differenziale").value + "non esiste correlazione tra le domanda");
}
