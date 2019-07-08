/**@function loadJSON
 * metodo che permette di caricare la rete precedentemente salvata
 * 
 */

function loadJSON(){
    if(loadNet == null){
     alert("Impossibile effettuare alcun caricamento: nessuna Rete precedentemente salvata");
     return;
    }

    var json = JSON.parse(loadNet);
    var net2 = new convnetjs.Net();
    net2.fromJSON(json);
    net = net2;
    printTextarea(layer_exe, "\n\Caricamento Rete dell'ultima rete salvata");
} 