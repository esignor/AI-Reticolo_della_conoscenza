import * as chai from 'chai';
//const expect = chai.expect;
const assert = chai.assert;
import { generator_input } from '../src/generator_input';
import { generator_input_probability } from '../src/generator_input_probability';
import {cluster} from '../src/cluster';



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
  assert.exists(a);

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

  console.log(question_color);
  
  for(var i = 0; i < 3; ++i){
    assert.equal(question_color[i],  "1,2,3")

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
  assert.equal(question_color[i], i+1); // le righe stesse
}

});

});