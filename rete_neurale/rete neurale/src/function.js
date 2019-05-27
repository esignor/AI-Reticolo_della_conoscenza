function update() { // permette di fare il training del dato

    console.log("inizio dell'allenamento per i dati inseriti");
    eval($("#layerdef").val()); // mi serve per attivare train

    N = ArrayInput.length;


    var x = new convnetjs.Vol(1, 1, 6); // parametri passati alla rete (larghezza, altezza, profondita'), inoltro in questo modo un punto attraverso la rete
    var avloss = 0.0; // calcolo della perdita
    for (var iters = 0; iters < 20; iters++) { // ho il dubbio che iteri solo per perfezionare l'apprendimento
        for (var ix = 0; ix < N; ix++) {
            x.w = ArrayInput[ix];
            var stats = trainer.train(x, ArrayOutput[ix]);
            avloss += stats.loss;
        }
    }
    avloss /= N * iters;

}


function prevision() {
    var id_prevision = document.getElementsByClassName("id_prevision");
    var net = new convnetjs.Net();
    net.makeLayers(layer_defs);
    var x = new convnetjs.Vol(1, 1, 6);
    x.w[0] = id_prevision[0].value;

    if (!controlValue(x.w[0]))//controllo del contenuto della form
        return; //inserimento non valido

    var trovato = false; //controllo che i'identificativo in input sia stato inserito mediante vettore
    for (var i = 0; i < ArrayInputSession.length & !trovato; ++i) {
        if (ArrayInputSession[i] == x.w[0])
            trovato = true;
    }
    if (!trovato) {
        alert("id domanda non inserito in input");
        return;
    }

    //altrimenti inserimento id valido
    console.log("id domanda da prevedere: " + x.w[0]);
    var scores = net.forward(x);
    console.log("previsione" + scores.w[0]);
}


function abilita_trainer() {
    console.log(ArrayInput[0] + ArrayOutput[0] + ArrayInput.length + ArrayOutput.length);
    if (ArrayInput[0] != "" && ArrayOutput[0] != "" && ArrayInput.length == ArrayOutput.length) { // controllo dei dati di allenameto, devono essere inseriti e salvati negli appositi contenitori
        document.myForm.button_trainer.style.display = "inline"; // abilito i pulsanti
        document.myForm.button_prevision.style.display = "inline";
        document.myForm.id_question.style.display = "inline";
        document.getElementById('id_question_label').style.display = "inline";
        console.log("bottone di trainer abilitato");
    }
}



/** function formSubmit(operazione)
 * @param {String} operazione contenente la voce input oppure output
 * metodo che ha il compito, una volta che l'utente ha premuto il pulsante di save di salvare i dati all'interno degli array specifici
 *  (ArrayInput e ArrayOutput). Metodo che viene chiamato da addFields
 **/
function formSubmit(operazione) {
    var count = 0;
    var x = document.getElementsByClassName(operazione); // per avere il contenuto delle celle di  output
    console.log("x" + x.length);
    var i;
    for (i = 0; i < x.length; i++) {
        if (operazione == "input") {
            var number = x[i].value;
            console.log("number " + number);
            if (controlValue(number)) {
                ArrayInput[i] = number;
                ArrayInputSession[count] = number;
                count = count + 1;
            }
            else return;
        }
        else {
            ArrayOutput[i] = x[i].value;
        }


    }
    console.log(ArrayInput + " " + ArrayOutput);
    abilita_trainer(); // rendo accessibile il pulsante di allenamento

}

/** function number
 *  @param {number} number 
 *  metodo che ha il compito di controllare la validità del parametro passato alla funzione
 * return true sse il parametro è di natura non vuota, intera e positiva e non superiore a 9999, altrimenti viene stampato a video un messaggio di errore
 * e viene ritornato false
 */
function controlValue(number) {
    if (number == "" || isNaN(number) || parseInt(number) < 0 || parseInt(number.value) > 9999) {
        alert("Inserire un intero  positivo");
        return false;
    }
    return true;
}

/** function addFields
 * metodo che ha il compito di aggiungere n campi definiti dall'utente nei box di Input e di Output, di istanziare i rispettivi pulsanti di save e di, a
 * a evento submit innescato, demandare il salvataggio dei dati al metodo di formSubmit
 */
function addFields() {
    // Number of inputs to create
    var number = document.getElementById("member").value;
    if (!controlValue(number)) return;//controllo field: deve essere stato inserito un numero

    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    // creazione box di Input
    var div = document.createElement("div"); // creo box per la form di input
    div.id = "box_input";
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        div.appendChild(document.createTextNode("Input" + (i + 1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "number";
        input.name = "member" + i;
        console.log("inp" + input.name);
        input.classList.add("input");

        div.appendChild(input);
    }

    var input = document.createElement("input"); //appendo save a box_input
    input.id = "button_newfield";
    input.type = "submit";
    input.name = "save";
    input.value = "save";
    input.setAttribute('onclick', 'formSubmit("input")'); // premo save, salvo i valori di input su un array
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti  
    div.appendChild(input); //appendo save a box_input
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti  

    container.appendChild(div); // appendo box_input a container


    // creazione box di Output
    var div = document.createElement("div"); // creo box per la form di output
    div.id = "box_output";
    for (var j = 0; j < number; j++) {
        // Append a node with a random text
        div.appendChild(document.createTextNode("Output" + (j + 1)));
        // Create an <input> element, set its type and name attributes
        var select = document.createElement("select"); // creo la select
        select.name = "field_value"; //attributo della select
        select.classList.add("output");
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
    input.setAttribute('onclick', 'formSubmit("output")'); // premo save, salvo i valori di output su un array
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti 
    div.appendChild(input); //appendo save a box_output
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti  

    var input = document.createElement("input"); // bottone che attiva l'apprendimento
    input.id = "button_trainer";
    input.type = "submit";
    input.value = "start trainer";
    input.setAttribute('onclick', 'update()'); // 
    div.appendChild(input); //appendo save a box_output

    var label = document.createElement("label"); // bottone che crea la label
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
    div.appendChild(input); //appendo save a box_output

    container.appendChild(div); // appendo box_output a container



}


