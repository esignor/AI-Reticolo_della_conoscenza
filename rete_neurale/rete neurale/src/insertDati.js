/** @function insertDati
 * @param {*} dim dimensione di input e output della rete
 * inserimento dei dati per  compiere l'addestramento della rete
 */


function insertDati(dim) {
    // addestramento tutto in un set
    var ArrayInput = [];
    printTextarea(0, "Caricamento dati nella Rete");
    /*for (var n = 0; n < 2000; ++n) { // genero n vettori per il training
 
         // generatore standard
         var Aux = generator_input(dim);
         ArrayInput[n] = Aux;
         printTextarea(layer_exe,"\n\Inserito vettore di risposta:  [" + ArrayInput[n] + "]");
     }
     var frequencePos = frequenceMatrixPos(ArrayInput, dim); //in uso per generare csv da passare all'applicativo per creare il Reticolo sui dati di frequenza 
     var frequenceNeg = frequenceMatrixNeg(ArrayInput, dim);
     update(ArrayInput, dim);
     /*console.log(frequencePos);
     console.log(frequenceNeg);*/


    for (var n = 0; n < 2000; ++n) { // genero n vettori per il training
   
           // generatore standard
          var Aux= generator_input_probability(dim);
  
           ArrayInput[n] = Aux;
           printTextarea(layer_exe, "\n\Inserito vettore di risposta: [" + ArrayInput[n] + "]");
       }
  
       update(ArrayInput, dim);
       var frequencePos = frequenceMatrixPos(ArrayInput, dim); //in uso per generare csv da passare all'applicativo per creare il Reticolo sui dati di frequenza 
       var frequenceNeg = frequenceMatrixNeg(ArrayInput, dim);
       

    /*for (var n = 0; n < 2000; ++n) { // genero n vettori per il training

        // generatore standard
        var Aux = generator_input_pure(dim);

        ArrayInput[n] = Aux;
        printTextarea(layer_exe, "\n\Inserito vettore di risposta:  [" + ArrayInput[n] + "]");

    }
    /*var frequencePos = frequenceMatrixPos(ArrayInput, dim); //in uso per generare csv da passare all'applicativo per creare il Reticolo sui dati di frequenza 
    var frequenceNeg = frequenceMatrixNeg(ArrayInput, dim);

    update(ArrayInput, dim);*/
}