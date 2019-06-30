/** function cluster
 * 
 * @param {*} vectorColor array dei colori delle previsioni delle vectorColor.length domande (ovvero dimensione di input/output della rete)
 * @param {*} differenziale parametro che indica l'oscillazione massima di cui sono soggetti in rapporto l'una all'altra i gruppi di domande da individuaare 
 * metodo che ha il compito di individuare le correlazioni esistenti (esclusivamente dal punto di vista matematico) tra una  domanda n con la domanda n+1 confrontando tra loro i colori di previsione
 *  e portandoli in diminuzione del coefficiente differenziale_accopiamento
   @return questionCluster vettore che contiene la correlazione matematica rappresentata per gruppi di doamande 
 */

cluster  = function(vectorColor, differenziale) {
  
  var questionCluster = []; // salvo le questionCluster di elemento che matchano su un delta massimo differenziale
  var n = 0;
  for (var i = 0; i < vectorColor.length; ++i) {
    var count = 0;
    for (var j = 0; j < vectorColor.length; ++j) {
        var aux = vectorColor[i].split("-"); // splitto ogni colore nell'elemento i
        var value_i = parseInt(aux[0]);// primo valore di colore dell'elemento i
        aux = vectorColor[j].split("-");// splitto ogni colore nell'elemento j
        var value_j = parseInt(aux[0]); //primo valore di colore dell'elemento j
        if (Math.abs(value_i - value_j) <= differenziale){
          count = count + 1;
          if(count == 1){
            questionCluster[n] = "domanda "  + (i + 1) + ": " + (j + 1);
          }
          else{
            questionCluster[n] = questionCluster[n] + ", " + (j + 1);
          }
 

          }
        }
        n = n+1;
      }

  return questionCluster;

}