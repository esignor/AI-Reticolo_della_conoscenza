/** @function animationPrevision
 * 
 * @param {*} scores collezione dei variabili di previsione
 * @param {*} dim dimensione di input e output della rete
 * il metodo ha lo scopo di creare tanti rettangoli quante sono le previsioni, e di colorarne il colore di riempimento in base al valore della previsione.
 */

function animationPrevision(scores, dim){
    
    var myCanvas = document.getElementById("myCanvas"); // acquisiamo il contesto su cui lavorare
    var context = myCanvas.getContext("2d");
    
    var x = 0; // larghezza
    var y = 30; // altezza

    var vectorColor = [];

    for(var j = 0 ; j<dim; ++j){
    context.beginPath();//nuovo elemento disegnato
    context.rect(x, y, 25, 30);
    var colorRed, colorGreen, colorBlue;
    

      if(parseFloat(scores.w[j]) <= -1.0){ // sicuramente rosso
        colorRed = 255;
        colorGreen = 0;
        colorBlue = 0;    
      }

      else if(parseFloat(scores.w[j]) >= 1.0){ // sicuramente verde
        colorRed = 0;
        colorGreen = 255;
        colorBlue = 0;
      }

      else if(parseFloat(scores.w[j]) == 0.0){ // sicuramente bianco
        colorRed = 255;
        colorGreen = 255;
        colorBlue = 255;
      }
      // casi borderline
      else if(parseFloat(scores.w[j]) > 0){// combinazione rgb verde - bianco
       colorRed = parseInt((scores.w[j]*0 + (1-scores.w[j])*255));
       colorGreen = parseInt(((scores.w[j]*255) + (1-scores.w[j])*255));
       colorBlue =  parseInt((scores.w[j]*0 + (1-scores.w[j])*255));
      }

      else if(parseFloat(scores.w[j]) < 0){ // combinazione rgb rosso - bianco
        colorRed = parseInt(((-scores.w[j]*255)+ (1+scores.w[j])*255));
        colorGreen = parseInt((-scores.w[j]*0 + (1+scores.w[j])*255));
        colorBlue = parseInt((-scores.w[j]*0 + (1+scores.w[j])*255));

      }
      context.fillStyle = "rgb(" + colorRed + " , "+ colorGreen + ", " + colorBlue +")";
   

        vectorColor[j] =  colorRed + "-" + colorGreen + "-" + colorBlue;
   
      if(j == 0)// stampa codice dei colori rgb su textarea
        printTextarea(layer_exe,"\n\n\Analisi dei dati \n\domanda " + (j + 1) + ": " + vectorColor[j]);
      else
      printTextarea(layer_exe," - domanda " + (j + 1) + ": " + vectorColor[j]);


      context.fill(); // applico il colore

      x = x + 40;

    }

    document.getElementById("button_dettaglio-animation").style.display = "inline"; // fa comparire il pulsante che attivita' la possibilita' di visualizzare il dettaglio delle previsioni
    
    return vectorColor;
}