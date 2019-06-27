/**Test d'unita' per la rete neurale di test e del database. Per poterli eseguire si deve anteporre la keywor exports al modulo delle funzioni coinvolte */

import {assert} from 'chai';
import { generator_input } from '../src/generator_input';
import { generator_input_probability } from '../src/generator_input_probability';
import {cluster} from '../src/cluster'
import {configure_db} from '../src/configure_db'
import {configure} from '../src/configure'



it('#Test 1 - generazione array mappato su grafo', function () {
  var a = generator_input(6);
  if (a[2] != 0 && a[5] != 0)
    assert.equal(a[2], a[5], "2 e 5 non sono coppie di domande (oracolo non rispettato)");
  if (a[0] != 0 && a[3] != 0)
    assert.equal(a[0], a[3], "0 e 3 non sono coppie di domande (oracolo non rispettato)");
  if (a[1] != 0 && a[4] != 0)
    assert.equal(a[1], a[4], "1 e 4 non sono coppie di domande (oracolo non rispettato)");

});


it('#Test 2 - generazione array spuro', function () {
  var a = generator_input_probability(6);
  assert.exists(a, "vettore di valori di probabilita' non definito");

});

describe('#Test3', function() {
  var color = [];
  it('array di colori uguali', function(){
  for (i=0;i<3;i++) {  // array di test 3 x 3
    color[i]=new Array(3);
  }

  for(var i = 0; i<3; ++i){
    for(var j = 0; j<3; ++j){
      var color_a = 225;
      var color_b = 225;
      var color_c = 225;
      color[i][j] = color_a + "- " + color_b + "-" + color_c; 
    }
  }
  var question_color = cluster(color);

  
  for(var i = 0; i < 3; ++i){
    assert.equal(question_color[i],  "1,2,3", "individuazione coppie di colori che fa fallito le aspettative");

}
});

it('array di colori diversi', function(){

for(var i = 0; i<3; ++i){
  for(var j = 0; j<2; ++j){
    var color_a = 225;
    var color_b = 225;
    var color_c = 225;
    color[i][j] = color_a + "- " + color_b + "-" + color_c; 
  }
}
color[0][2] = 20 + "-" +  200 + "-" + 25;
color[1][2] = 55 + "-" +  200 + "-" + 25;
color[2][2] = 200 + "-" + 60 + "-" + 25;

var question_color = cluster(color);

for(var i =  0; i<3 ;++i){
  assert.equal(question_color[i], i+1, "individuazione coppie di colori che fa fallito le aspettative");
}

});

});


describe('#Test4 - configurazione della rete andata a buon fine', function() {
it('configurazione rete del database', function () {
  var conf = configure_db();
  assert.isNotNull(conf, "Configurazione della Rete neurale del database non riuscita")
});
it('configurazione rete di prova', function () {
  var conf = configure();
  assert.isNotNull(conf, "Configurazione della Rete neurale di prova non riuscita")

});

});