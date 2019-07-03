/** @function normalizationVectorTestPivot
 *  @param {*} dim dimensione di input e output della rete
 * il metodo ha lo scopo di normalizzare un vettore in ordine. Un vettore e' un test composto da tutte le n domande con -1(risposta non data), 0 (domanda non fatta), 
 * 1 (risposta data)
 * Idea: prende in pasto un file e legge il suo contenuto tramutando i dati in trainset
 */


 /**
  * 2a versione file csv composto da n_test e valore di risposta per ogni domanda
  */


 function normalizationVectorTestPivot(dim){
    printTextarea(0, "Caricamento file CSV");
    document.getElementById("myCanvas").style.display = "none";
    document.getElementById("button_JSON").style.display = "none";
    document.getElementById("button_writedocument").style.display = "none";
    document.getElementById("buttonLoad_JSON").style.display = "none";
    document.getElementById("button_dettaglio-animation").style.display = "none";
    document.getElementById("title_questionsdetail").style.display = "none";
    document.getElementById("myCanvas-detail").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("setter_numberfields").style.display = "none";
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // nome file .csv
    if (regex.test($("#fileUpload").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var n_vett = 0; 
                var rows = e.target.result.split("\n"); // prendo ogni riga del blocco
                for (var i = 0; i < rows.length - 1; i++) {
                    var vectorTest = [];
                    var cells = rows[i].split(";"); // splitto ogni elemento contenuto nella riga
                    for(var j = 0; j < cells.length; ++j){// splitto ogni elemento tranne l'ultimo elemento che e' una riga vuota
                    if(j > 0)
                       vectorTest[j-1] = parseInt(cells[j]); // in pos 0..88 posizione le 89 risposte, in pos 90 il nome del test e uso la conversione intera per evitare caratteri spuru
                    else
                      vectorTest[dim] = cells[j];
                    }

                    vectorCSV[n_vett] = vectorTest;
                    n_vett = n_vett + 1;
                }

                insertDati_db(dim);

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
  * come precondizione il file e' composto in ordine da id_test, id_domanda, valore della risposta, il contenuto deve essere normalizzato
  */


function normalizationVectorTest_standard(dim){
    printTextarea(0, "Caricamento file CSV");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // nome file .csv
    if (regex.test($("#fileUpload").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var Domande = [];
                var Risposte = [];
                var Test = [];
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


                // prendo un test alla volta confronto gli array Test - Domande - Risposte
                var n = 1;
                var n_vett = 0;
                var aux = 1;
                for (var t = 1; t < Test.length;) { // scorro tutti i test 
                    var vectorTest = []; // svuoto vectorTest altrimenti mi fa doppioni e mi invalida i risultati
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
                    vectorTest[dim] = Test[n-1];
                    vectorCSV[n_vett] = vectorTest;
                    n_vett = n_vett + 1;
                    t = n; // in questo modo si passa sempre a un nuovo test

                }
                insertDati_db(dim);

            }
            reader.readAsText($("#fileUpload")[0].files[0]);
        } else {
            alert("Questo browser non supporta HTML5");
        }
    } else {
        alert("Inserire un file con estensione CSV, per favore");
    }

}