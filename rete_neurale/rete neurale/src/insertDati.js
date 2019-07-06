/** @function insertDati
 * @param {*} dim dimensione di input e output della rete
 * inserimento dei dati per  compiere l'addestramento della rete
 */


function insertDati(dim) {
    // addestramento tutto in un set
    printTextarea(0, "Inizilizzazione addestramento della rete");
    var ArrayInput = [];
    for (var n = 0; n < 2000; ++n) { // genero n vettori per il training
 
         // generatore standard
         var Aux = generator_input(dim);
 
         ArrayInput[n] = Aux;
         printTextarea(layer_exe,"\n\Inserito vettore di risposta:  [" + ArrayInput[n] + "]");
     }
     frequenceMatrix(ArrayInput, dim);
     update(ArrayInput, dim);


    /*for (var n = 0; n < 2000; ++n) { // genero n vettori per il training
   
           // generatore standard
          var Aux= generator_input_probability(dim);
  
           ArrayInput[n] = Aux;
           printTextarea(layer_exe, "\n\Inserito vettore di risposta: [" + ArrayInput[n] + "]");
       }
  
       update(ArrayInput, dim);*/

    /*for (var n = 0; n < 2000; ++n) { // genero n vettori per il training

        // generatore standard
        var Aux = generator_input_pure(dim);

        ArrayInput[n] = Aux;
        printTextarea(layer_exe, "\n\Inserito vettore di risposta:  [" + ArrayInput[n] + "]");
    }

    update(ArrayInput, dim);*/
}