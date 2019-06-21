/** @function animmationPrevision
 * 
 * @param {*} dim numero di box animati
 * il metodo ha lo scopo di, per ogni domanda, creare tanti quadrattini quante sono le domande e colorarli in modo differente in base alla previsione
 * innescata dal valore di ogni domanda
 */

function animationPrevision_detail(dim) {
  document.getElementById("title_questionsdetail").style.display = "block"; // posiziona di blocco il title del box al dettaglio
  document.getElementById("myCanvas-detail").style.display = "block"; // faccio comparire il box con la previsione canvas
  document.getElementById("button_dettaglio-animation").style.display = "none"; // fa scomparire il pulsante di dettaglio previsioni

  var myCanvas = document.getElementById("myCanvas-detail"); // acquisiamo il contesto su cui lavorare
  var context = myCanvas.getContext("2d");
  var vectorColor = [];
  for (i=0;i<dim;i++) {
    vectorColor[i]=new Array(dim);
  }

  for (var i = 0; i < vectorPrevision.length; ++i) { // scorro il vettore previsione con lo scopo che per ogni elemento (domanda) trovo la sua previsione su tutte le dim domande
    var scores = prevision_singleElement(i, vectorPrevision[i]); // gli passo l'indice e il contenuto dell'indice

    //vengono settate le coordinate
    var y = 25;
    var x = 65;

    // colori della scritta "domanda n"
    context.textAlign = "left";
    context.fillStyle = "#0f1934"
    context.fillText("domanda " + (i + 1), 5, y * (i + 1.3)); // 1.3 serve per settare il testo al centro dell'altezza dei quadrattini
    // per ogni riga vengono disegnati dim quadratini
    for (var j = 0; j < dim; ++j) {
      context.beginPath();//nuovo elemento disegnato
      context.rect(x, y * (i + 1), 10, 10);
      var colorRed, colorGreen, colorBlue;

      if (parseFloat(scores.w[j]) <= -1.0) { // sicuramente rosso
        colorRed = 255;
        colorGreen = 0;
        colorBlue = 0;
      }

      else if (parseFloat(scores.w[j]) >= 1.0) { // sicuramente verde
        colorRed = 0;
        colorGreen = 255;
        colorBlue = 0;
      }

      else if (parseFloat(scores.w[j]) == 0.0) { // sicuramente bianco
        colorRed = 255;
        colorGreen = 255;
        colorBlue = 255;
      }
      // casi borderline
      else if (parseFloat(scores.w[j]) > 0) {// combinazione rgb bianco - verde
        colorRed = parseInt((scores.w[j] * 0 + (1 - scores.w[j]) * 255));
        colorGreen = parseInt((scores.w[j] * 255 + (1 - scores.w[j]) * 255));
        colorBlue = parseInt((scores.w[j] * 0 + (1 - scores.w[j]) * 255));
      }


      else if (parseFloat(scores.w[j]) < 0) { // combinazione rgb rosso - bianco
        colorRed = parseInt((-scores.w[j] * 255 + (1 + scores.w[j]) * 255));
        colorGreen = parseInt((-scores.w[j] * 0 + (1 + scores.w[j]) * 255));
        colorBlue = parseInt((-scores.w[j] * 0 + (1 + scores.w[j]) * 255));

      }

      context.fillStyle = "rgb(" + colorRed + " , " + colorGreen + ", " + colorBlue + ")";
      vectorColor[i][j] =  colorRed + "-" + colorGreen + "-" + colorBlue;
      context.fill(); // applico il colore

      x = x + 15;

    }
  }

  var questionCluster = cluster(vectorColor);


  // stampo il contenuto

  layer_exe = layer_exe + "\n\Relazione fra le domande :";
  for (var i = 0; i < vectorColor.lenght; ++i) {
    layer_exe = layer_exe + "\n\domanda " + (i + 1) + ":";
    layer_exe = layer_exe + "[" + questionCluster[i] + "]";
  }
  $("#layerexe").val(layer_exe);

}