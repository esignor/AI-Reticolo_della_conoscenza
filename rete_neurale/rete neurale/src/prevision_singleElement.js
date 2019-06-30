
/** @function prevision_singleElement
 * @param {*} index indice del vettore previsione in analisi (individua il numero di domanda)
 * @param {*} value_risposta valore della risposta data alla domanda numero indice  del  vettore previsione
 * @return scores vettore di previsoni calcolato sulla base della domanda numero index con valore value_risposta
 * @param {*} dim dimensione di input e output della rete
 */
function prevision_singleElement(index, value_risposta, dim) {

  var x = new convnetjs.Vol(1, 1, dim);

  for (var i = 0; i < vectorPrevision.length; i++) {
    if (index == i)
      x.w[i] = value_risposta;
    else
      x.w[i] = 0;
  }
  //previsione della rete
  return net.forward(x, false);

}
