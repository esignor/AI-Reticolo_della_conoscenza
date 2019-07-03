/** @function createJSON()
 * metodo che tramuta la rete in formato JSON (utile per lo scanmbio dei dati), salvandola
 * */

function createJSON(){

    // quando faccio la previsione 
    // per salvare la rete in un JSON
    var json = net.toJSON();
    // ho salvato la rete su un JSON
    var str = JSON.stringify(json);
    loadNet = str; // salvata la Rete
    printTextarea(0, "Salvata Rete in memoria. Codice JSON risultante: " + str);

}