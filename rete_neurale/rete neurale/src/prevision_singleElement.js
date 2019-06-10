
/** @function prevision_singleElement
 * @param {*} index indice del vettore previsione in analisi (individua il numero di domanda)
 * @param {*} valure_risposta valore della risposta data alla domanda numero indice  del  vettore previsione
 * @return scores vettore di previsoni calcolato sulla base della domanda numero index con valore value_risposta
 */
function prevision_singleElement(index, value_risposta) {

  var x = new convnetjs.Vol(1, 1, 89);

  for (var i = 0; i < vectorPrevision.length; i++) {
    if (index == i)
      x.w[i] = value_risposta;
    else
      x.w[i] = 0;
  }
  //previsione della rete
  return net.forward(x, false);

}
