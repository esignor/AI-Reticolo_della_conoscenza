
/** @function addFields
 * metodo che ha il compito di aggiungere n campi definiti dall'utente nei box di input, di istanziare i rispettivi pulsanti di save e di, a
 * a evento submit innescato, demandare il salvataggio dei dati al metodo di formSubmit
 */

function addFields() {
    layer_exe = layer_exe + " Inserire risultati dei test..."
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
        div.appendChild(document.createTextNode("Input" + (j + 1)));
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

    container.appendChild(div); // appendo box in input delle domande a container

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


    var div = document.createElement("div"); // creo box per la form di output
    var p = document.createElement("p");
    div.id = "box_vettore";
    p.id = "title_vettore";
    p.appendChild(document.createTextNode("Vettore di previsione"));
    div.appendChild(p);
    for (var i = 0; i < number; i++) {
        var select = document.createElement("select"); // creo la select
        select.name = "field_value"; //attributo della select
        select.classList.add("vettore_input");

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
    container.appendChild(div); // appendo box in input delle domande a container


    var input = document.createElement("input"); // bottone che attiva la previsione
    input.id = "button_prevision";
    input.type = "submit";
    input.value = "prevision trainer";
    input.setAttribute('onclick', 'prevision()'); // 
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti 
    div.appendChild(input); //appendo save a box_output
}


