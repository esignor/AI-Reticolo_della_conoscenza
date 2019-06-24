/** @function insertDati
 * inserimento dei dati per  compiere l'addestramento della rete
 */


function insertDati() {
    // addestramento tutto in un set
    layer_exe = "Inizilizzazione addestramento della rete"
    $("#layerexe").val(layer_exe);
    var ArrayInput= [];
    for (var n = 0; n < 2000; ++n) { // genero n vettori per il training
 
         // generatore standard
         var Aux = generator_input(6);
 
         ArrayInput[n] = Aux;
         layer_exe = layer_exe + "\n\Inserito vettore di risposta:  [" + ArrayInput[n] + "]";
         $("#layerexe").val(layer_exe);
     }

     update(ArrayInput);
 }

  /*for (var n = 0; n < 2000; ++n) { // genero n vettori per il training
 
         // generatore standard
        var Aux= generator_input_probability(6);

         ArrayInput[n] = Aux;
         layer_exe = layer_exe + "\n\Inserito vettore di risposta: [" + ArrayInput[n] + "]";
         $("#layerexe").val(layer_exe);
     }

     update(ArrayInput);
 }*/
    /*layer_exe = "Inizilizzazione addestramento della rete"
    $("#layerexe").val(layer_exe);
    ArrayInput = [1, 0, 1, 1, 0, 0]; ArrayOutput = [1, 0, 1, 1, 0, 0];
    layer_exe = layer_exe + "Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 0, 0, 1, 0]; ArrayOutput = [1, 1, 0, 0, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, -1, 1, 0, 0]; ArrayOutput = [1, 0, -1, 1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 0, 0]; ArrayOutput = [1, -1, 1, 1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, -1, 0, -1, 0]; ArrayOutput = [0, 1, -1, 0, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 1, -1, -1, 0]; ArrayOutput = [1, 1, 1, -1, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, 0, 1, -1]; ArrayOutput = [0, 1, 0, 0, 1, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [-1, 0, 1, 1, 0, 1]; ArrayOutput = [-1, 0, 1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, 1, -1, 1, 0]; ArrayOutput = [1, 0, 1, -1, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 1, 1]; ArrayOutput = [1, -1, 1, 1, 1, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, 1, 1, -1]; ArrayOutput = [0, 1, 0, 1, 1, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 0, 0, 0, -1, 0]; ArrayOutput = [0, 0, 0, 0, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [-1, 1, 0, 1, 1, 0]; ArrayOutput = [-1, 1, 0, 1, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, -1, 1, 0, 1]; ArrayOutput = [1, 1, -1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, -1, 1, 1, 1]; ArrayOutput = [1, 0, -1, 1, 1, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();

    ArrayInput = [1, -1, 1, 1, -1, 1]; ArrayOutput = [1, -1, 1, 1, -1, 1];
    layer_exe = "Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 0, 1, -1, 0]; ArrayOutput = [1, 1, 0, 1, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, 0, 1, -1]; ArrayOutput = [0, 1, 0, 0, 1, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 0, -1, 0, 0]; ArrayOutput = [1, 1, 0, -1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 0, 1, 1, -1, 1]; ArrayOutput = [0, 0, 1, 1, -1, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 0, 0, 0, 0]; ArrayOutput = [1, -1, 0, 0, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, 1, 1, 0, -1]; ArrayOutput = [1, 0, 1, 1, 0, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, -1, 1, 0]; ArrayOutput = [0, 1, 0, -1, 1, 0];
    layer_exe = layer_exe + "n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, -1, 1, 0, 1]; ArrayOutput = [1, 1, -1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [-1, 0, 0, 1, 0, 0]; ArrayOutput = [-1, 0, 0, 1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, 0, 1, 0, -1]; ArrayOutput = [1, 0, 0, 1, 0, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 0, 1]; ArrayOutput = [1, -1, 1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, -1, 1, 0]; ArrayOutput = [0, 1, 0, -1, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, -1, 0, 1, 0]; ArrayOutput = [0, 1, -1, 0, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 0, 1]; ArrayOutput = [1, -1, 1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();


    layer_exe = "Inizilizzazione addestramento della rete"
    $("#layerexe").val(layer_exe);
    ArrayInput = [1, 0, 1, 1, 0, 0]; ArrayOutput = [1, 0, 1, 1, 0, 0];
    layer_exe = layer_exe + "Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 0, 0, 1, 0]; ArrayOutput = [1, 1, 0, 0, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, -1, 1, 0, 0]; ArrayOutput = [1, 0, -1, 1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 0, 0]; ArrayOutput = [1, -1, 1, 1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, -1, 0, -1, 0]; ArrayOutput = [0, 1, -1, 0, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 1, -1, -1, 0]; ArrayOutput = [1, 1, 1, -1, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, 0, 1, -1]; ArrayOutput = [0, 1, 0, 0, 1, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [-1, 0, 1, 1, 0, 1]; ArrayOutput = [-1, 0, 1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, 1, -1, 1, 0]; ArrayOutput = [1, 0, 1, -1, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 1, 1]; ArrayOutput = [1, -1, 1, 1, 1, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, 1, 1, -1]; ArrayOutput = [0, 1, 0, 1, 1, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 0, 0, 0, -1, 0]; ArrayOutput = [0, 0, 0, 0, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [-1, 1, 0, 1, 1, 0]; ArrayOutput = [-1, 1, 0, 1, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, -1, 1, 0, 1]; ArrayOutput = [1, 1, -1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, -1, 1, 1, 1]; ArrayOutput = [1, 0, -1, 1, 1, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();

    ArrayInput = [1, -1, 1, 1, -1, 1]; ArrayOutput = [1, -1, 1, 1, -1, 1];
    layer_exe = "Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 0, 1, -1, 0]; ArrayOutput = [1, 1, 0, 1, -1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, 0, 1, -1]; ArrayOutput = [0, 1, 0, 0, 1, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, 0, -1, 0, 0]; ArrayOutput = [1, 1, 0, -1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 0, 1, 1, -1, 1]; ArrayOutput = [0, 0, 1, 1, -1, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 0, 0, 0, 0]; ArrayOutput = [1, -1, 0, 0, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, 1, 1, 0, -1]; ArrayOutput = [1, 0, 1, 1, 0, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, -1, 1, 0]; ArrayOutput = [0, 1, 0, -1, 1, 0];
    layer_exe = layer_exe + "n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 1, -1, 1, 0, 1]; ArrayOutput = [1, 1, -1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [-1, 0, 0, 1, 0, 0]; ArrayOutput = [-1, 0, 0, 1, 0, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, 0, 0, 1, 0, -1]; ArrayOutput = [1, 0, 0, 1, 0, -1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 0, 1]; ArrayOutput = [1, -1, 1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, 0, -1, 1, 0]; ArrayOutput = [0, 1, 0, -1, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [0, 1, -1, 0, 1, 0]; ArrayOutput = [0, 1, -1, 0, 1, 0];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();
    ArrayInput = [1, -1, 1, 1, 0, 1]; ArrayOutput = [1, -1, 1, 1, 0, 1];
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
    $("#layerexe").val(layer_exe);
    update();*/

