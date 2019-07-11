/** @function frequenceMatrixPos
 * @param {*} array array contenente esclusivamente il set di dati della Rete non ancora addestrato
 * @param {*} dim dimesione di input/output della rete
 * @return frequence vettore contenete la frequenza di tutte le domande. Ogni domanda viene conteggiate con segno concordo (C) o discordo (D) con riferimento
 * a domanda di risposta a 1
 * 
 */
 var Pos1 = []; // variabili globali in uso solo in fase di test per la generazione dei vettori passati in input al Reticolo
 var Pos2 = [];
 var Neg1 = [];
 var Neg2 = []; 
frequenceMatrixPos = function (array, dim) {
    var numPresenze = [];
    var numPositive = [];
    var numNegative = [];
    for (var n = 0; n < dim; ++n) {
        var count = 0;
        var countUno = 0;
        var countMenouno = 0;
        for (var i = 0; i < array.length; ++i) {
            if (array[i][n] == 1 || array[i][n] == -1) {
                count = count + 1;
                if (array[i][n] == 1)
                    countUno = countUno + 1;
                else
                    countMenouno = countMenouno + 1;

            }

        }
        numPresenze[n] = count;
        numPositive[n] = countUno;
        numNegative[n] = countMenouno;
    }

    /*console.log("numero di domande fatte: " + numPresenze); //in uso per i test dei risultati
    console.log("numero di risposte corrette: " + numPositive);
    console.log("numero di risposte negative: " + numNegative);*/

    var frequenzePositive = [];
    var frequenzeNegative = [];
    var frequenzeMerge = []
    for (var i = 0; i < dim; ++i)
        frequenzeMerge[i] = new Array(2)



    /*for(var  i = 0; i < dim; ++i){  //in uso per i test dei risultati
        frequenzePositive[i] = parseFloat(numPositive[i]/numPresenze[i]);
        frequenzeMerge[i][0] = frequenzePositive[i];
    }

    for(var  i = 0; i < dim; ++i){  //in uso per i test dei risultati
        frequenzeNegative[i] = parseFloat(numNegative[i]/numPresenze[i]);
        frequenzeMerge[i][1] = frequenzeNegative[i];
    }
    return frequenzeMerge;

    */
    // domanda a 1
    var matrixCorrelation = [];
    var tot = [];
    var frequence = [];
    for (var i = 0; i < dim; ++i){//init
        matrixCorrelation[i] = new Array(dim);
        tot[i] = new Array(dim);
        frequence[i] = new Array(dim);
        Pos1[i] = new Array(dim);  //in uso per i test dei risultati
        Neg1[i] = new Array(dim);
        
    }

    for (var dom = 0; dom < dim; ++dom) {
        for (var k = 0; k < dim; ++k) {
            var countA = 0;
            var countD = 0;
            var count = 0;
            for (var row = 0; row < array.length; ++row) {
                if (array[row][dom] == 1) {
                    count = count + 1;
                    if (array[row][k] == 1) {
                        countA = countA + 1;
                    }
                    else if (array[row][k] == -1){
                        countD = countD + 1;
                    }
                }
            }
            matrixCorrelation[dom][k] = "C " + countA + " D" + countD;
            tot[dom][k] = count;
            frequence[dom][k] = "fC: " + countA/count + " fD: " + countD/count;
            Pos1[dom][k] = countA/count;  //in uso per i test dei risultati
            Neg1[dom][k] = countD/count;

        }
    }
    /*for(var i = 0; i < matrixCorrelation.length; ++i) // in uso per i test dei risultati
      console.log(matrixCorrelation[i]);*/
    /*for(var i = 0; i < tot.length; ++i)
      console.log(tot[i]);*/
    /*for(var i = 0; i < frequence.length; ++i)
      console.log(frequence[i]);*/
      return frequence;
}


/** @function frequenceMatrixNeg
 * @param {*} array array contenente esclusivamente il set di dati della Rete non ancora addestrato
 * @param {*} dim dimesione di input/output della rete
 * @return frequence vettore contenete la frequenza di tutte le domande. Ogni domanda viene conteggiate con segno concordo (C) o discordo (D) con riferimento
 * a domanda di risposta a -1
 * 
 */

frequenceMatrixNeg = function (array, dim) {
    var numPresenze = [];
    var numPositive = [];
    var numNegative = [];
    for (var n = 0; n < dim; ++n) {
        var count = 0;
        var countUno = 0;
        var countMenouno = 0;
        for (var i = 0; i < array.length; ++i) {
            if (array[i][n] == 1 || array[i][n] == -1) {
                count = count + 1;
                if (array[i][n] == 1)
                    countUno = countUno + 1;
                else
                    countMenouno = countMenouno + 1;

            }

        }
        numPresenze[n] = count;
        numPositive[n] = countUno;
        numNegative[n] = countMenouno;
    }

    /*console.log("numero di domande fatte: " + numPresenze); // in uso per i test dei risultati
    console.log("numero di risposte corrette: " + numPositive);
    console.log("numero di risposte negative: " + numNegative);*/

    var frequenzePositive = [];
    var frequenzeNegative = [];
    var frequenzeMerge = []
    for (var i = 0; i < dim; ++i)
        frequenzeMerge[i] = new Array(2)



    /*for(var  i = 0; i < dim; ++i){
        frequenzePositive[i] = parseFloat(numPositive[i]/numPresenze[i]); // in uso per i test dei risultati
        frequenzeMerge[i][0] = frequenzePositive[i];
    }

    for(var  i = 0; i < dim; ++i){
        frequenzeNegative[i] = parseFloat(numNegative[i]/numPresenze[i]);
        frequenzeMerge[i][1] = frequenzeNegative[i];
    }
    return frequenzeMerge;

    */
    var matrixCorrelation = [];
    var tot = [];
    var frequence = [];
    for (var i = 0; i < dim; ++i){//init
        matrixCorrelation[i] = new Array(dim);
        tot[i] = new Array(dim);
        frequence[i] = new Array(dim);
        Pos2[i] = new Array(dim);  //in uso per i test dei risultati
        Neg2[i] = new Array(dim);
    }

for (var dom = 0; dom < dim; ++dom) {
    for (var k = 0; k < dim; ++k) {
        var countA = 0;
        var countD = 0
        var count = 0;
        for (var row = 0; row < array.length; ++row) {
            if (array[row][dom] == -1) {
                count = count + 1;
                if (array[row][k] == -1) {
                    countA = countA + 1;
                }
                else if (array[row][k] == 1){
                    countD = countD + 1;
                }
            }
        }
        matrixCorrelation[dom][k] = "C " + countA + " D" + countD;
        tot[dom][k] = count;
        frequence[dom][k] = "fC: " + countA/count + " fD: " + countD/count;
        Pos2[dom][k] = countA/count;  //in uso per i test dei risultati
        Neg2[dom][k] = countD/count;
    }
}

/*for(var i = 0; i < matrixCorrelation.length; ++i) // in uso per i test dei risultati
console.log(matrixCorrelation[i]);*/
/*for(var i = 0; i < tot.length; ++i)
console.log(tot[i]);
for(var i = 0; i < frequence.length; ++i)
console.log(frequence[i]);*/
for(var i = 0; i < frequence.length; ++i)
//console.log((i+1) + ";" + Pos1[i] + ";" + Neg1[i] + ";" + Pos2[i] + ";" +  Neg2[i]); // stampa su console utile in fase di test per generare il file csv per generare i dati da usare per la creazione del Reticolo sulla base della frequenza

return frequence;

}