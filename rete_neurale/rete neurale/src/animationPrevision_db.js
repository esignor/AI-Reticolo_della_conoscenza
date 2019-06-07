/** @function animmationPrevision
 * 
 * @param {*} scores collezione dei variabili di previsione
 * @param {*} dim numero di box animati
 * il metodo ha lo scopo di creare tanti rettangoli quante sono le previsioni, e di colorarli in base al valore della previsione.
 */

function animationPrevision(scores, dim){
    
    var myCanvas = document.getElementById("myCanvas"); // acquisiamo il contesto su cui lavorare
    var context = myCanvas.getContext("2d");
    
    var x = 5;
    var y = 15;

    for(var j = 0 ; j<dim; ++j){
    context.beginPath();//nuovo elemento disegnato
    context.rect(x, y, 20, 20);
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

      else if(parseFloat(scores.w[j]) == 0.0){ // sicuramente giallo
        colorRed = 255;
        colorGreen = 255;
        colorBlue = 0;
      }
      // casi borderline
      else if(parseFloat(scores.w[j]) > 0){// combinazione rgb giallo - verde
       colorRed = parseInt((scores.w[j]*0 + (1-scores.w[j])*255));
       colorGreen = parseInt((scores.w[j]*255 + (1-scores.w[j])*255));
       colorBlue =  parseInt((scores.w[j]*0 + (1-scores.w[j])*0));
      }

      else if(parseFloat(scores.w[j]) < 0){ // combinazione rgb giallo - rosso
        colorRed = parseInt((scores.w[j]*255 + (1-scores.w[j])*255));
        colorGreen = parseInt((scores.w[j]*0 + (1-scores.w[j])*255));
        colorBlue = parseInt((scores.w[j]*0 + (1-scores.w[j])*0));

      }
      
      context.fillStyle = "rgb(" + colorRed + " , "+ colorGreen + ", " + colorBlue +")";


      context.fill(); // applico il colore
      
      
      x = x + 35; // per aumentare - diminuire il numero di rettangolini sulla riga
      if(j == 33 || j == 64){ // per andare a capo
        y = y + 25;
        x = 5;
      }

    }

}