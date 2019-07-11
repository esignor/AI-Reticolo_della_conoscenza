// Preparo i vettori per il Reticolo della Conoscenza
/**function vettoreReticolo
 * @param {*} dim dimensione di input e output della rete
 * metodo che si occupa di creare un vettore contenente  il delta delle previsioni a -1 e a 1 per ciascun componente rispetto al vettore di base (tutto a zero)
 */
vettoreReticolo = function(dim){


 var scores = [];
 for (var j = 0; j < dim+1; ++j) {
   scores[j] = new Array((dim+1));
 }

var result = []
 for (var j = 0; j < dim*2; ++j) {
   result[j] = new Array(dim);
 }

 for (var i = -1; i < dim; i++) {
     var x = new convnetjs.Vol(1, 1, dim);
   for(var j = 0; j < dim; j++){
     if(i == j)
       x.w[j] = 1; // salvo il contenuto anche nell'array necessario al metodo forward

     else
       x.w[j] = 0;
 }
 //previsione della rete
 var value = net.forward(x, false); 
 scores[i+1] = value.w; 
 //console.log(scores[i+1]); // test csv
 }

for(var i = 0; i < dim; ++i){
for(var j= 0; j < dim; ++j){
 result[i][j] = Math.abs(scores[0][j] - scores[i+1][j]);
}
}


  for (var i = -1; i < dim; i++) {
    var x = new convnetjs.Vol(1, 1, dim);
  for(var j = 0; j < dim; j++){
    if(i == j)
      x.w[j] = -1; // salvo il contenuto anche nell'array necessario al metodo forward

    else
      x.w[j] = 0;
}
//previsione della rete
var value = net.forward(x, false); 
scores[i+1] = value.w;
//console.log(scores[i+1]); // test csv
}

for(var i = 0; i < dim; ++i){
for(var j= 0; j < dim; ++j){
result[i][dim+j] = Math.abs(scores[0][j] - scores[i+1][j]);
}
}

/*for(var i = 0; i < dim ; ++i){
 console.log(i+1 + ";" + result[i]); //stampa il vettore da passare all'applicativo che crea il Reticolo della Conoscenza,. Usato in fase di test per generare il csv
 }*/
}


