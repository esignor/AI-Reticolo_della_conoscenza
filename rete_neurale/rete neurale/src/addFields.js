
/** @function addFields
 * metodo che ha il compito di aggiungere n campi definiti dall'utente nei box di input, di istanziare i rispettivi pulsanti di save e di, a
 * a evento submit innescato, demandare il salvataggio dei dati al metodo di formSubmit
 */

function addFields(number) {
    layer_exe = layer_exe + " \n\Inserire dati della previsione che si vuole ottenere..."
    $("#layerexe").val(layer_exe);


   document.getElementById("setter_numberfields").style.display = "none";

    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

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
        option.value = " ";
         
        div.appendChild(select); //al div ci appendo la select
        select.appendChild(option); //al select ci appendo option
        option.appendChild(document.createTextNode("0")); //a option ci appendo la label

        for (n = -1; n < 2; n=n+2) {
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



