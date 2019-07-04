/**Test d'unita' per la rete neurale di test e del database. Per poterli eseguire si deve anteporre la keyword exports al modulo delle funzioni coinvolte */

import { chai } from 'chai';
import { assert } from 'chai';
import { generator_input_pure } from '../src/generator_input_pure';
import { generator_input } from '../src/generator_input';
import { generator_input_probability } from '../src/generator_input_probability';
import { cluster } from '../src/cluster'
import { configure_db } from '../src/configure_db'
import { configure } from '../src/configure'
import { controlValueFields } from '../src/controlValueFields'
import { printTextarea } from '../src/printTextarea'


describe('#Test1 - generator_input', function () {
  for (var n = 0; n < 10; ++n)
    it('generazione array mappato su grafo', function () {
      var a = generator_input(6);
      if (a[2] != 0 && a[5] != 0)
        assert.equal(a[2], a[5], "2 e 5 non sono coppie di domande (oracolo non rispettato)");
      if (a[0] != 0 && a[3] != 0)
        assert.equal(a[0], a[3], "0 e 3 non sono coppie di domande (oracolo non rispettato)");
      if (a[1] != 0 && a[4] != 0)
        assert.equal(a[1], a[4], "1 e 4 non sono coppie di domande (oracolo non rispettato)");

    });
});

describe('#Test2 - generator_input_pure', function () {
  for (var n = 0; n < 10; ++n)
    it('generazione array mappato su grafo', function () {
      var a = generator_input_pure(6);
      assert.equal(a[2], a[5], "2 e 5 non sono coppie di domande (oracolo non rispettato)");
      assert.equal(a[0], a[3], "0 e 3 non sono coppie di domande (oracolo non rispettato)");
      assert.equal(a[1], a[4], "1 e 4 non sono coppie di domande (oracolo non rispettato)");

    });
});



describe('#Test3 - generator_input_probability', function () {
  it('generazione array spuro ', function () {
    var a = generator_input_probability(6);
    assert.exists(a, "vettore di valori di probabilita' non definito");

  });

});

describe('#Test4', function () {
  var color = [];
  it('array di colori uguali', function () {
    for (i = 0; i < 3; i++) {  // array di test 3 x 3
      color[i] = new Array(3);
    }
    // 3 elementi ugauli
    for (var i = 0; i < 3; ++i) {
      var color_a = 225;
      var color_b = 225;
      var color_c = 225;
      color[i] = color_a + "- " + color_b + "-" + color_c;
    }
    var question_color = cluster(color, 0, 0, 0);

    for (var i = 0; i < question_color.length; ++i)
      assert.equal(question_color[i], "1, 2, 3", "individuazione coppie di colori che fa fallito le aspettative");

  });

  it('array di colori diversi', function () {
    //3 elementi uguali, 1 diverso
    for (var i = 0; i < 3; ++i) {
      var color_a = 225;
      var color_b = 225;
      var color_c = 225;
      color[i] = color_a + "- " + color_b + "-" + color_c;
    }
    color[3] = 20 + "-" + 200 + "-" + 25;

    var question_color = cluster(color, 0, 0, 0);

    assert.equal(question_color[0], "1, 2, 3", "individuazione coppie di colori che fa fallito le aspettative");
    assert.equal(question_color[1], "4", "individuazione coppie di colori che fa fallito le aspettative");

  });

});


describe('#Test5 - configurazione della rete andata a buon fine', function () {
  it('configurazione rete del database', function () {
    var conf = configure_db();
    assert.isNotNull(conf, "Configurazione della Rete neurale del database non riuscita");
  });
  it('configurazione rete di prova', function () {
    var conf = configure();
    assert.isNotNull(conf, "Configurazione della Rete neurale di prova non riuscita");

  });

});

describe('#Test6 - controllo valori inseriti nella form del differenziale di accopiamento', function () {

  it('valore corretto entro i range stabiliti', function () {
    assert.isTrue(controlValueFields(10), "Numero intero postivi valido non accettato correttamente come numero intero positivo");
  });

  it('conversione a intero di un numero con virgola', function () {
    assert.isTrue(controlValueFields(5.3), "Numero intero postivi valido non accettato correttamente come numero intero positivo");

  });

});



describe('#Test7 - stampa', function () {
  it('test del modulo di stampa', function () {
    assert.isNotTrue(printTextarea(null, "Oggi e' una bellissima giornata"), "layer_exe non pur essendo not definited viene valutato come definito");
  })

});
