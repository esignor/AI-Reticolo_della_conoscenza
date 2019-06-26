// Preparo i vettori per il Reticolo della Conoscenza

vettoreReticolo = function(dim){
 // Preparo i vettori per il Reticolo della Conoscenza

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
 console.log("vettore x: " + x.w);
 var value = net.forward(x, false); 
 scores[i+1] = value.w;
 console.log("sc" + scores[i+1]);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta 
 }

for(var i = 0; i < dim; ++i){
for(var j= 0; j < dim; ++j){
 result[i][j] = Math.abs(scores[0][j] - scores[i+1][j]);
}
}

for(var i = 0; i < dim ; ++i){
  console.log("1: " + result[i]);
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
console.log("vettore x: " + x.w);
var value = net.forward(x, false); 
console.log("bug" + scores[i+1]);
scores[i+1] = value.w;
console.log("bug" + scores[i+1] + " " + value.w);
console.log("sc" + scores[i+1]);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta 
}

for(var i = 0; i < dim; ++i){
for(var j= 0; j < dim; ++j){
result[i][dim+j] = Math.abs(scores[0][j] - scores[i+1][j]);
}
}

for(var i = 0; i < dim ; ++i){
 console.log(i+1 + ";" + result[i]);
 }
}


