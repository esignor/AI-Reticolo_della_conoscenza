function cluster(vectorColor, dim) {
  console.log("vectorColor");
  for (var i = 0; i < dim; ++i) {
    for (var j = 0; j < dim; ++j)
      console.log(vectorColor[i][j] + " ");

    console.log("\n");

  }

  // confronto gli elementi di ogni riga con quelli delle successive per trovare i match
  // i, i_aux righe ; j colonne
  var equals = [];

  for (var i = 0; i < dim; ++i) {
    equals[i] = new Array(dim);
    for (var j = 0; j < dim; ++j) {
      equals[i][j] = 0;
    }
  }
  var Coppie = [];
  var n = 0;
  for (var i = 0; i < dim; ++i) {
    for (var i_aux = 0; i_aux < dim; ++i_aux) {
      //console.log("i_aux" + i);
      var count = 0;
      for (var j = 0; j < dim; ++j) {
        var aux = vectorColor[i][j].split("-"); // splitto ogni elemento contenuto nella riga
        var value = parseInt(aux[0]);
        //console.log("aux" + aux + " value" + value);
        aux = vectorColor[i_aux][j].split("-");
        var value_aux = parseInt(aux[0]);
        //console.log("aux" + aux + " value" + value_aux);
        if (vectorColor[i][j] == vectorColor[i_aux][j] || Math.abs(value - value_aux) <= 1) {
          //console.log("vale per la coppia di domande" + (i+1) + "," + (i_aux+1));
          count = count + 1;
          //console.log("count" + count);
          if (count == dim) {
            console.log("colore match" + vectorColor[i][j] + "==" + vectorColor[i_aux][j]);
            Coppie[n] = (i + 1) + "," + (i_aux + 1);
            n = n + 1;
          }
        }
      }
      equals[i][i_aux] = count;
    }
  }

  console.log("Coppie");
  for (var i = 0; i < Coppie.length; ++i) {
    console.log(Coppie[i] + " ");

    console.log("\n");

  }
  console.log("equals");
  for (var i = 0; i < dim; ++i) {
    for (var j = 0; j < dim; ++j)
      console.log(equals[i][j] + " ");

    console.log("\n");
  }

  var question_match = [];
  for (var i = 0; i < dim; ++i) {// id delle domande
    for (var j = 0; j < Coppie.length; ++j) {
      var aux = Coppie[j].split(","); // splitto ogni elemento contenuto nella riga
      var value1 = parseInt(aux[0]);
      var value2 = parseInt(aux[1]);
      if (value1 == (i + 1)) {
        if (question_match[i] != null)
          question_match[i] = question_match[i] + "," + value2;
        else
          question_match[i] = value2;
      }

    }
  }


  layer_exe = layer_exe + "\n\Relazione fra le domande :";
  for (var i = 0; i < dim; ++i) {
    layer_exe = layer_exe + "\n\domanda " + (i + 1) + ":";
    layer_exe = layer_exe + "[" + question_match[i] + "]";
  }
  $("#layerexe").val(layer_exe);


}