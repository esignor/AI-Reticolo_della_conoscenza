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
                        var table = $("<table />");
                        var rows = e.target.result.split("\n"); // ogni riga e' un elemento di rows
                       // console.log("rows " + rows);
                        for (var i = 1; i < rows.length; i++) {
                            //var row = $("<tr />");
                            var cells = rows[i].split(" "); // splitto il contenuto di ogni riga
                            console.log("cells" + cells);
                            for (var j = 0; j < cells.length; j++) {
                                //var cell = $("<td />");
                                //cell.html(cells[j]); // prendo il contenuto di oogni riga
                                //console.log(cell.html(cells[j]));
                                //row.append(cell);
                                var element = cells[i].split("c"); // prendo ogni elemento della riga
                                console.log("element" + element);
                            }
                            //table.append(row);
                        }
                       // $("#dvCSV").html('');
                       // $("#dvCSV").append(table);
                    }
                    reader.readAsText($("#fileUpload")[0].files[0]);
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid CSV file.");
            }
}