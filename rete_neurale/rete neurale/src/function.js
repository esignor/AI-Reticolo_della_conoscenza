var ArrayInput = [];  //array di input da usare per l'allenamento dei dati
var ArrayOutput = []; //array do output indispensabile per l'autoencoder
var N = 0; //contratore dimesnione array

// codice della rete neurale

var layer_defs, layer_exe, net, trainer;
var t = "\n\
layer_defs = [];\n\
layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth:6});\n\
layer_defs.push({type:'fc', num_neurons:6, activation: 'tanh'});\n\
layer_defs.push({type:'fc', num_neurons:2, activation: 'tanh'});\n\
layer_defs.push({type:'regression', num_neurons:2});\n\
\n\
net = new convnetjs.Net();\n\
net.makeLayers(layer_defs);\n\
\n\
trainer = new convnetjs.SGDTrainer(net, {learning_rate:0.01, momentum:0.1, batch_size:10, l2_decay:0.001});\n\
";



$(function () {  //  chiamata quando tutti gli elementi DOM della pagina sono pronti per essere usati

    $("#layerdef").val(t); // mostra la configurazione della rete nel primo box

});



/** function update()
 * funzione che ha il compito di effettuare l'apprendimento della rete
 */
function update() { // permette di fare il training del dato
    //stampa sul box di log
    layer_exe = layer_exe + "\n\Inizio allenamento della rete ...";
    $("#layerexe").val(layer_exe);

    eval($("#layerdef").val()); // mi serve per attivare train

    N = ArrayInput.length;

   //apprendimento della rete
    var x = new convnetjs.Vol(1, 1, 6); // parametri passati alla rete (larghezza, altezza, profondita'), inoltro in questo modo un punto attraverso la rete
    for (var ix = 0; ix < N; ix++) {
       x.w = ArrayInput[ix]; // gli passo l'input
       var stats = trainer.train(x, [ArrayOutput[ix]]); // inizia ad imparare che per quel dato punto in input vale l'output passato (tecnica dell'autoencoder)
    }

    document.getElementById("button_trainer").disabled = true;//disabilito il pulsante di apprendimento
    document.getElementById("button_prevision").style.display = "inline"; //fino a quando i dati non sono stati inseriti e non si e' dato il via al trainer non si puo' procedere alla previsione
    document.getElementById("id_question").style.display = "inline";
    document.getElementById("id_question_label").style.display = "inline";

    ArrayInput = []; ArrayOutput = []; //array di supporto per il singolo test che devono essere vuoto per il prossimo set di dati

}

/** function prevision()
 * metodo che ha il compito, data un id di domanda nella form di input, di prevedere se il candidato, in base a cio' che la rete ha imparato sara' in grado di 
 * rispondervi o meno
 */
/*function prevision() {
    // stampa di connessione della rete
    layer_exe = layer_exe + "\n\Richiesta di previsione inoltrata alla rete ...";
    $("#layerexe").val(layer_exe);

    var id_prevision = document.getElementsByClassName("id_prevision");
    var net = new convnetjs.Net();

    // dati per effettuare la previsione sulla rete
    net.makeLayers(layer_defs);
    var x = new convnetjs.Vol(1, 1, 6);
    x.w[0] = id_prevision[0].value; // salvo il valore dell'input

    //altrimenti inserimento valido
    layer_exe = layer_exe + "\n\Richiesta di previsione accettata";
    $("#layerexe").val(layer_exe);

    //previsione della rete
    var scores = net.forward(x, false);  // chiamata al metodi di previsione, in base all'input ottengo la probabilita' di risposta;

    layer_exe = layer_exe + "\n\La domanda con id " + x.w[0] + " ha previsione calcolata di " + scores.w[0] + "\n\Rete Neurale in attesa ...";
    $("#layerexe").val(layer_exe);}

    */


/** function abilita_trainer()
 * metodo che ha il compito di abilitare la funzionalita' di apprendimento della rete
 */
function abilita_trainer() {
    if (ArrayInput[0] != "") { // controllo dei dati di allenameto, devono essere inseriti e salvati negli apposito array specifico
        document.getElementById("button_trainer").style.display = "inline"; // visualizzazione dei pulsanti
        document.getElementById("button_trainer").disabled = false;
    }
}



/** function formSubmit()
 * metodo che ha il compito, una volta che l'utente ha premuto il pulsante di save di salvare i dati all'interno dell'array specifico
 *  (ArrayInput). Metodo che viene chiamato da addFields
 */
function formSubmit() {
    var x = document.getElementsByClassName("risposta_input"); // per avere il contenuto delle celle di dati
    for (var i = 0; i < x.length; i++) {
        var number = x[i].value;

            if (!controlValueInput(number)) //controllo che il valore inserito in input non sia vuoto
              return;

            ArrayInput[i] = number; // salvataggio del contenuto della cella in esame nell'array di supporto
            ArrayOutput[i] = number; // salvo il contenuto anche nell'array necessario all'autoencoder
    }
    // stampa dei risultati sul box di log
    layer_exe = layer_exe + "\n\Inserimento risposte alle domande del test andato a buon fine"
    $("#layerexe").val(layer_exe);
    layer_exe = layer_exe + "\n\Ricapitolazione dati inseriti: " + "Risposte ottenute  ["  + ArrayInput +"]"
    $("#layerexe").val(layer_exe);
    
    abilita_trainer(); // rendo accessibile il pulsante di allenamento

}

/** function controlValueFields
 *  @param {number} number 
 *  metodo che ha il compito di controllare la validità del parametro passato alla funzione (relative all'inserimento nel numero di fields di input)
 * return true sse il parametro è di natura non vuota, intera e positiva e non superiore a 9999, altrimenti viene stampato a video un messaggio di errore
 * e viene ritornato false
 */
function controlValueFields(number) {
    if (number == "" || isNaN(number) || parseInt(number) <= 0 || parseInt(number.value) > 9999) {
        alert("Inserire un numero intero positivo valido");
        return false;
    }
    return true;
}

/** function controlValueInput
 *  @param {number} number 
 *  metodo che ha il compito di controllare la validità del parametro passato alla funzione (relative all'inserimento nel box di input del valore della domanda)
 * return true sse il parametro è di natura non vuota, altrimenti viene stampato a video un messaggio di errore  e viene ritornato false
 */

function controlValueInput(number) {
    if (number == "") {
        alert("Inserire un numero intero valido");
        return false;
    }
    return true;
}

/** function addFields
 * metodo che ha il compito di aggiungere n campi definiti dall'utente nei box di input, di istanziare i rispettivi pulsanti di save e di, a
 * a evento submit innescato, demandare il salvataggio dei dati al metodo di formSubmit
 */
function addFields() {
    layer_exe = "Rete Neurale in attesa. Inserire risultati dei test..."
    $("#layerexe").val(layer_exe);


    var number = document.getElementById("member").value;
    if (!controlValueFields(number)) return;//controllo field: deve essere stato inserito un numero

    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // creazione box di risposta alle domande di un test
    var div = document.createElement("div"); // creo box per la form di output
    div.id = "box_output";
    for (var j = 0; j < number; j++) {
        // Append a node with a random text
        div.appendChild(document.createTextNode("Input" + (j + 1)));
        // Create an <input> element, set its type and name attributes
        var select = document.createElement("select"); // creo la select
        select.name = "field_value"; //attributo della select
        select.classList.add("risposta_input");

        //carattere vuoto di default
        var option = document.createElement("option");
        option.value = "";

        div.appendChild(select); //al div ci appendo la select
        select.appendChild(option); //al select ci appendo option
        option.appendChild(document.createTextNode("")); //a option ci appendo la label

        for (n = -1; n < 2; ++n) {
            var option = document.createElement("option");
            option.value = n;

            div.appendChild(select); //al div ci appendo la select
            select.appendChild(option); //al select ci appendo option
            option.appendChild(document.createTextNode(n)); //a option ci appendo la label
        }
    }

    var input = document.createElement("input");
    input.id = "button_newfield";
    input.type = "submit";
    input.name = "save";
    input.value = "save";
    input.setAttribute('onclick', 'formSubmit()'); // premo save, salvo i valori di input di risposta alle domande su un array
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti 
    div.appendChild(input); //appendo save a box_output
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti  

    var input = document.createElement("input"); // bottone che attiva l'apprendimento
    input.id = "button_trainer";
    input.type = "submit";
    input.value = "start trainer";
    input.setAttribute('onclick', 'update()'); // 
    div.appendChild(input); //appendo save a box_output

    /*var label = document.createElement("label"); // bottone che crea la label
    label.for = "id_question";
    label.id = "id_question_label";
    label.appendChild(document.createTextNode("Id domanda:"));
    div.appendChild(label); //appendo save a box_output

    var input = document.createElement("input"); // bottone che crea il box della label
    input.name = "id_question";
    input.id = "id_question";
    input.type = "number";
    input.classList.add("id_prevision");
    div.appendChild(input); //appendo save a box_output


    var input = document.createElement("input"); // bottone che attiva la previsione
    input.id = "button_prevision";
    input.type = "submit";
    input.value = "prevision trainer";
    input.setAttribute('onclick', 'prevision()'); // 
    div.appendChild(input); //appendo save a box_output*/

    container.appendChild(div); // appendo box in input delle domande a container



}


