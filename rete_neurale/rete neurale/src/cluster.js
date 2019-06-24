/** function cluster
 * 
 * @param {*} vectorColor array dei colori delle previsioni delle vectorColor.length domande
 * metodo che ha il compito di individuare il numero di match esatti che esistono tra una previsione della domanda n con la domanda n+1 per tutte le vectorColor.length domande
 * e che individua per ogni domanda i quali sono le j-esime domande correlate
 */

cluster  = function(vectorColor) {

  var equals = [];

  for (var i = 0; i < vectorColor.length; ++i) { // init
    equals[i] = new Array(vectorColor.length); // salvo il numero di match tra una riga i e una riga i+1 (i e i_aux)
    for (var j = 0; j < vectorColor.length; ++j) {
      equals[i][j] = 0;
    }
  }
  var Coppie = []; // salvo le coppie di righe che matchano esattamente
  var n = 0;
  for (var i = 0; i < vectorColor.length; ++i) {
    for (var i_aux = 0; i_aux < vectorColor.length; ++i_aux) {
      var count = 0;
      for (var j = 0; j < vectorColor.length; ++j) {
        var aux = vectorColor[i][j].split("-"); // splitto ogni elemento contenuto nella riga
        var value = parseInt(aux[0]);// primo valore di colore della riga i
        aux = vectorColor[i_aux][j].split("-");//primo valore di colore della riga i_aux
        var value_aux = parseInt(aux[0]);
        if (Math.abs(value - value_aux) <= 30) {
          count = count + 1;
          if (count == vectorColor.length) {
            Coppie[n] = (i + 1) + "," + (i_aux + 1);
            n = n + 1;
          }
        }
      }
      equals[i][i_aux] = count;// i match esatti tra la riga i e i_aux sonno count
    }
  }

  // effettua una stampa unica delle coppie di domande
  var questionCluster = [];
  for (var i = 0; i < vectorColor.length; ++i) {// id delle domande
    for (var j = 0; j < Coppie.length; ++j) {
      var aux = Coppie[j].split(","); // splitto ogni elemento contenuto nella riga
      var value1 = parseInt(aux[0]);
      var value2 = parseInt(aux[1]);
      if (value1 == (i + 1)) {
        if (questionCluster[i] != null)
          questionCluster[i] = questionCluster[i] + "," + value2;
        else
          questionCluster[i] = value2;
      }

    }
  }

  return questionCluster;

}