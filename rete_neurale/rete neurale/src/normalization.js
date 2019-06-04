/** @function normalizationVectorTest
 * il metodo ha lo scopo di normalizzare un vettore in ordine. Un vettore e' un test composto da tutte le n domande con -1(risposta non data), 0 (domanda non fatta), 
 * 1 (risposta data)
 * Idea: prende in pasto un file e legge il suo contenuto tramutando i dati in trainset
 */
function normalizationVectorTest(){
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // nome file .csv
            if (regex.test($("#fileUpload").val().toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var Domande = [];
                        var count_questions = 0;
                        var rows = e.target.result.split("\n"); // prendo il blocco 
                        console.log(rows);
                        for (var i = 1; i < rows.length; i++) {
                            var cells = rows[i].split(" "); // splitto ogni riga
                            for (var j = 0; j < cells.length; j++) {
                                 var n= 1;
                                 var element = cells[j].split(";"); // prendo il contenuto di oogni riga
                                 if(n == 2){ // sono al numero della domanda
                                    var trovato = false;
                                    for(var i = 0; i < Domande.length && !trovato; ++i){
                                        if(Domande[i] == element)
                                          trovato = true;
                                    }
                                    if(!trovato)
                                      count_questions = count_questions + 1;

                                 }
                                  n = n+1;


                            } // fine domanda
                        } // fine test
                        console.log(count_questions);
                    }
                    reader.readAsText($("#fileUpload")[0].files[0]);
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid CSV file.");
            }
}