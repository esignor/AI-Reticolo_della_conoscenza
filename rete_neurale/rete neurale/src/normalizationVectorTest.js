/** @function normalizationVectorTestPivot
 * il metodo ha lo scopo di normalizzare un vettore in ordine. Un vettore e' un test composto da tutte le n domande con -1(risposta non data), 0 (domanda non fatta), 
 * 1 (risposta data)
 * Idea: prende in pasto un file e legge il suo contenuto tramutando i dati in trainset
 */

 // i vettori servono per addestrare la rete

 /**
  * 2a versione file csv composto da n_test e valore di risposta per ogni domanda
  */

  var Test = []; // memorizzo gli identificativi dei test da passare alla funzionalita' di document.write

 function normalizationVectorTestPivot(){
    layer_exe = "Caricamento file CSV"
    $("#layerexe").val(layer_exe);

    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // nome file .csv
    if (regex.test($("#fileUpload").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var n_vett = 0; 
                var test = 0;
                var rows = e.target.result.split("\n"); // prendo ogni riga del blocco
                for (var i = 0; i < rows.length - 1; i++) {
                    var vectorTest = [];
                    var cells = rows[i].split(";"); // splitto ogni elemento contenuto nella riga
                    for(var j = 0; j < cells.length; ++j){
                      if(j > 0)
                        vectorTest[j-1] = cells[j];
                      else{
                        Test[test]= cells[j];
                        test = test + 1
                      }
                    }

                    console.log("vectorTest" + vectorTest);
                    vectorCSV[n_vett] = vectorTest;
                    n_vett = n_vett + 1;
                }

                insertDati_db();

            }
            reader.readAsText($("#fileUpload")[0].files[0]);
        } else {
            alert("Questo browser non supporta HTML5");
        }
    } else {
        alert("Inserire un file con estensione CSV, per favore");
    }

}


 /** 1a versione
  * come precondizione il file e' composto in ordine da id_test, id_domanda, valore della risposta
  */


function normalizationVectorTest_standard(){
    layer_exe = "Caricamento file CSV"
    $("#layerexe").val(layer_exe);

    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // nome file .csv
    if (regex.test($("#fileUpload").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var Domande = [];
                var Test = [];
                var Risposte = [];
                var count = 0;
                var rows = e.target.result.split("\n"); // prendo ogni riga del blocco
                for (var i = 0; i < rows.length - 1; i++) {
                    var cells = rows[i].split(";"); // splitto ogni elemento contenuto nella riga
                    Test[count] = cells[0];
                    Domande[count] = cells[1];
                    Risposte[count] = cells[2];;

                    if (Test[count] != null && Domande[count] != null && Risposte[count] != null)
                        count = count + 1;
                } // fine test

                // trovare il numero di domande distinte
                var Domande_sort = [];
                var n_domande = 0;
                for (var i = 1; i < Domande.length; ++i) {
                    var trovato = false;
                    for (var j = i+1; j < Domande.length && !trovato; ++j) {
                        if (Domande[i] == Domande[j])
                            trovato = true;
                            
                    }
                    if (!trovato) {
                        Domande_sort[n_domande] = Domande[i];
                        n_domande = n_domande + 1; // dimensione di ogni vettore
                        
                    }
                }
                Domande_sort = Domande_sort.sort();

                console.log("Domande sort: " + Domande_sort);

                // ogni vettore ha dimensione n_domande
                var vectorTest = [];

                // prendo un test alla volta confronto gli array Test - Domande - Risposte
                var n = 1;
                var n_vett = 0;
                var aux = 1;
                for (var t = 1; t < Test.length;) { // scorro tutti i test 
                    vectorTest = []; // svuoto vectorTest altrimenti mi fa doppioni e mi invalida i risultati
                    console.log("Test " + Test[t]);
                    for (var k = 0; k < Domande_sort.length; ++k) { // scorro le domande ordinate di un test t
                        // cerco se il Test ha la domanda Domande_sort[k]
                        var trovato = false;
                        for (aux = n; aux < Domande.length && Test[aux] == Test[t] && !trovato; ++aux) { // scorro le domande e le confronto con le domande oridnate del test t
                            if (Domande[aux] == Domande_sort[k]) {
                                vectorTest[k] = parseInt(Risposte[aux]); // per avere valori interi e non stringhe
                                trovato = true;
                            }
                        }
                        if (!trovato)
                            vectorTest[k] = 0; //domanda non fatta


                    }
                    n = aux; // ho scorso e confrontato tutto il test t
                    console.log("vectorTest" + vectorTest);
                    vectorCSV[n_vett] = vectorTest;
                    n_vett = n_vett + 1;
                    t = n; // in questo modo si passa sempre a un nuovo test

                }
                insertDati_db();

            }
            reader.readAsText($("#fileUpload")[0].files[0]);
        } else {
            alert("Questo browser non supporta HTML5");
        }
    } else {
        alert("Inserire un file con estensione CSV, per favore");
    }

}