import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
import { generator_input } from '../src/generator_input';
import { generator_input_probability } from '../src/generator_input_probability';

it('Test 1 - generazione array mappato su grafo', function () {
  var a = generator_input(6);
  if (a[2] != 0 && a[5] != 0)
    assert.equal(a[2], a[5]);
  if (a[0] != 0 && a[3] != 0)
    assert.equal(a[0], a[3]);
  if (a[1] != 0 && a[4] != 0)
    assert.equal(a[1], a[4]);

});


it('Test 2 - generazione array spuro', function () {
  var a = generator_input_probability(6);
  if (a[2] != 0 && a[5] != 0) {
    if (a[2] == 1 && a[5] == 1) {
      if (a[0] != 0 && a[3] != 0) {
        assert.equal(a[0], a[3]);
        assert.equal(a[0], 1);

      }
    }

  }
  if (a[0] != 0 && a[3] != 0) {
    if (a[0] == -1 && a[3] == -1) {
      if (a[2] != 0 && a[5] != 0) {
        assert.equal(a[2], a[5]);
        assert.equal(a[2], -1);

      }
    }
  }



});



/*describe('retries', function() {
  // Retry all tests in this suite up to 4 times
  this.retries(4);*/

/*describe('opern web page', function() {
  //browser.get('file:///home/eleonora/Scrivania/AI-Reticolo_della_conoscenza/rete_neurale/rete%20neurale/demo/index_reteprova.html');*/



/*it('Test 3', function(){
  ris = prevision()
  if(ris[0] > 0 && ris[3]<0 ||ris[1] > 0 && ris[4]<0|| ris[2]>0 && ris[5]<0 || ris[0] < 0 && ris[3] > 0 ||ris[1] < 0 && ris[4] > 0|| ris[2] < 0 && ris[5] > 0 )
    assert.throw("Errore")
})*/






// test d'unita che genera l'array di input
// test d'unita' che fa l'apprendimento
// test d'unita che fa la previsione*/

//})
