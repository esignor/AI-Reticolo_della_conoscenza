/** @function contentMethod_db
 * @param {*} string  stringa di riferimento
 *  il metodo ha il compito di chiamare il metodo definito da string. Lo scopo del metodo e' isolare il piu' possibile la logica 
 * del codice dall'interazione con l'utente
 */
function contentMethod_db(string) {
  var dim = document.getElementById("select_dim").value;
  if (string == 'controlArchitettura_db')
    controlArchitettura_db(dim);
  else if (string == 'normalizationVectorTestPivot')
    normalizationVectorTestPivot(dim);
  else if (string == ('writeDocument_db'))
    writeDocument_db(dim);
  else if (string == 'animationPrevision_detail')
    animationPrevision_detail(dim);
  else if (string == 'addFields_db')
    addFields_db(dim);
  else if (string == 'prevision_db')
    prevision_db(dim);

}
