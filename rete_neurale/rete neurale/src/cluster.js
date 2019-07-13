/** function cluster
 * 
 * @param {*} vectorColor array dei colori delle previsioni delle vectorColor.length domande (ovvero dimensione di input/output della rete)
 * @param {*} differenziale_1param parametro che indica l'oscillazione massima del primo parametro rgb tra gli elementi
 * @param {*} differenziale_2param parametro che indica l'oscillazione massima del secondo parametro rgb tra gli elementi
 * @param {*} differenziale_3param parametro che indica l'oscillazione massima del terzo parametro rgb tra gli elementi
   @return questionCluster vettore che contiene la correlazione matematica rappresentata per gruppi di cluster di domande
 */

cluster = function (vectorColor, differenziale_1param, differenziale_2param, differenziale_3param) {
  var questionCluster = []; // salvo le questionCluster di elemento che matchano su un delta massimo differenziale
  var n = 0;
  for (var i = 0; i < vectorColor.length; ++i) {
    var count = 0;
    for (var j = 0; j < vectorColor.length; ++j) {
      var aux = vectorColor[i].split("-"); // splitto ogni colore nell'elemento i
      var value_i = parseInt(aux[0]);// primo valore di colore dell'elemento i
      var value_isec = parseInt(aux[1]);// secondo valore di colore dell'elemento i
      var value_iter = parseInt(aux[2]);// terzo valore di colore dell'elemento i
      aux = vectorColor[j].split("-");// splitto ogni colore nell'elemento j
      var value_j = parseInt(aux[0]); //primo valore di colore dell'elemento j
      var value_jsec = parseInt(aux[1]); //secondo valore di colore dell'elemento j
      var value_jter = parseInt(aux[2]); //terzo valore di colore dell'elemento j
      if (Math.abs(value_i - value_j) <= differenziale_1param && Math.abs(value_isec - value_jsec) <= differenziale_2param && Math.abs(value_iter - value_jter) <= differenziale_3param) {
        count = count + 1;
        if (count == 1) {
          questionCluster[n] = j + 1;
        }
        else {
          questionCluster[n] = questionCluster[n] + ", " + (j + 1);
        }


      }
    }
    n = n + 1;
  }
  // scorro i cluster elimino i duplicati
  var questionClusterNoDupple = [];
  var n = 0;
  for (var i = 0; i < questionCluster.length; ++i) {
    var esiste = false;
    for (var j = 0; j < questionClusterNoDupple.length && !false; ++j) {
      if (questionCluster[i] == questionClusterNoDupple[j])
        esiste = true;
    }
    if (!esiste) {
      questionClusterNoDupple[n] = questionCluster[i];
      n = n + 1;
    }
  }
  return questionClusterNoDupple;

}