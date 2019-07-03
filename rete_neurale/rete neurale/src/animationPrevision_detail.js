/** @function animmationPrevision
 * 
 * @param {*} dim numero di box animati
 * il metodo ha lo scopo di, per ogni domanda, creare tanti quadrattini quante sono le domande e colorarli in modo differente in base alla previsione
 * innescata dal valore di ogni domanda
 */

function animationPrevision_detail(dim) {
  document.getElementById("title_questionsdetail").style.display = "block"; // posiziona di blocco il title del box al dettaglio
  document.getElementById("myCanvas-detail").style.display = "block"; // faccio comparire il box con la previsione canvas 
  document.getElementById("button_back").style.display = "block"
  document.getElementById("title_previsione").style.display = "none";
  document.getElementById("button_dettaglio-animation").style.display = "none"
  document.getElementById("container").style.display = "none";



  var myCanvas = document.getElementById("myCanvas-detail"); // acquisiamo il contesto su cui lavorare
  var context = myCanvas.getContext("2d");

  for (var i = 0,  n = 0, k = 2 ; n < vectorPrevision.length; ++i, ++n) { // scorro il vettore previsione con lo scopo che per ogni elemento (domanda) trovo la sua previsione su tutte le dim domande
    var scores = prevision_singleElement(i, vectorPrevision[i], dim); // gli passo l'indice e il contenuto dell'indice
    // i rappresenta il contatore di riga
    // j rappresenta il contatore di colonne

    //vengono settate le coordinate
    var y = 25;
    var x = 65;
      
      
    // colori della scritta "domanda n"
    context.textAlign = "left";
    context.fillStyle = "#0f1934"
    if(dim > 74 && n >=1){
      context.fillText("domanda " + (n + 1), 5, (y + 1) * ((n + k) + 0.3));
      k = k + 1;
    }
    else
      context.fillText("domanda " + (n + 1), 5, (y + 1) * ((n + 1) + 0.3)); // 0.3 serve per settare il testo al centro dell'altezza dei quadrattini
    // per ogni riga vengono disegnati dim quadratini
    for (var j = 0; j < dim; ++j) {
      context.beginPath();//nuovo elemento disegnato

      if(dim > 74 && j == 74){ // la linea va a capo
        x = 65;
        i = i + 1;
        y = 25;
      }
      context.rect(x, (y + 1) * (i + 1), 10, 10);

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
      context.fill(); // applico il colore

      x = x + 15;

    }
  }

}