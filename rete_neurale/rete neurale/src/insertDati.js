/** @function insertDati
 * inserimento dei dati per  compiere l'addestramento della rete
 */

function insertDati() {

    layer_exe = "Inizilizzazione addestramento della rete"
    $("#layerexe").val(layer_exe);
   /*for (var n = 0; n < 2000; ++n) { // genero n vettori per il training

        // generatore standard
        var ArrayInput = generator_input(6);

        ArrayOutput = ArrayInput;
        layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]";
        $("#layerexe").val(layer_exe);
        update();
    }*/


    for(var n = 0; n<2000; ++n){ // genero n vettori per il training

       // generatore con probabilita'
        var ArrayInput = generator_input_probability(6);
    
        ArrayOutput = ArrayInput;
        console.log(n + "vector" + ArrayInput + "/" + ArrayOutput);
        layer_exe =  layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"; 
        $("#layerexe").val(layer_exe);
        update();
}

    /*layer_exe = "Inizilizzazione addestramento della rete"
    $("#layerexe").val(layer_exe);
    ArrayInput = [1, 0, 1, 1, 0, 0]; ArrayOutput = [1, 0, 1, 1, 0, 0];
    layer_exe =  layer_exe + "Ricapitolazione dati inseriti: " + "Risposte ottenute  [" + ArrayInput + "]"
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



    prevision();
}
