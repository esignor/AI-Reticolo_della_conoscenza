/**@function printCorrelation
 * @param {*} questionCluster vettore che contenete l'accoppiamento
 il metodo si occupa di stampare il contenuto di questionCluster nella textarea dell'applicativo
 */
printCorrelation = function (questionCluster) {

  printTextarea(layer_exe, "\n\Relazione fra le domande con un parametri differenziazione configurati");
  for (var i = 0; i < questionCluster.length; ++i) {
    printTextarea(layer_exe, "\ncluster " + (i+1) + ": " + questionCluster[i]);
  }
  if (questionCluster.length == 0)
    printTextarea(layer_exe, "\Matrice di correlazione cluster vuota - per parametro di differenziazione " + document.getElementById("differenziale").value + "non esiste correlazione tra le domanda");
}
