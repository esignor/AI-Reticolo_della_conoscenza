/**function configureCanvasCoupling
  * @param {*} scores collezione dei variabili di previsione
 * @param {*} dim dimensione di input e output della rete
 * metodo che ha il compito di costruire il canvas delle domande in base alla previsione e calcolarne matematicamente la relazione sulla base del 
 * parametro differenziale_accoppiamento e mostrarne il contenuto nella textarea della rete
 */
function configureCanvasCoupling(scores, dim){
    if(dim == 6) // rete di prova
      var vectorColor = animationPrevision(scores, dim);

    else if(dim == 89){// rete delle domande nel database
      var vectorColor = animationPrevision_db(scores, dim);
    }
    var differenziale =  document.getElementById("differenziale").value; // controllo validita' valore gia' effettuato in previsione

    printTextarea(layer_exe, "\n\Parametro differenziale dei gruppi, su cui si vuole valutare matematicamente il comportamento della Rete: " + differenziale)

    var questionCluster = cluster(vectorColor, differenziale);


    printCorrelation(questionCluster, dim);
}
