/** @function contentMethod
 * @param {*} string  stringa di riferimento
 *  il metodo ha il compito di chiamare il metodo definito da string. Lo scopo del metodo e' isolare il piu' possibile la logica 
 * del codice dall'interazione con l'utente
 */
function contentMethod(string) {
  var dim = document.getElementById("select dim").value;
  if (string == 'controlArchitettura')
    controlArchitettura(dim);
  else if (string == 'normalizationVectorTestPivot')
    normalizationVectorTestPivot(dim);
  else if (string == ('writeDocument'))
    writeDocument(dim);
  else if (string == 'animationPrevision_detail')
    animationPrevision_detail(dim);
  else if (string == 'addFields_db')
    addFields_db(dim);
  else if (string == 'prevision_db')
    prevision_db(dim);

}
