
/** @function addFields
 * @param dim dimensione di input e output della rete
 * metodo che ha il compito di aggiungere n campi definiti dall'utente nei box di input, di istanziare i rispettivi pulsanti di save e di, a
 * a evento submit innescato, demandare il salvataggio dei dati al metodo di formSubmit
 */

function addFields(dim){
    printTextarea(0, "Richiesta di inserimento: \n\- parametro di differenziale tra le domande (valore valido >= 0) per creare dei gruppi con oscillazione massima nel parametro indicato \n\- dati del vettore previsione" + "\n\Successivamente premere il pulsante di previsione")


   document.getElementById("setter_numberfields").style.display = "none";

    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    var div = document.createElement("div"); // inserimento box per la dichiarazione del differenziale di accopiamento tra le domande
    div.id = "box_differenziale";
    var label=  document.createElement("label")
    label.for="differenziale";
    label.appendChild(document.createTextNode("Differenziale di accopiamento: "));
    var input = document.createElement("input");
    input.name="differenziale" ;
    input.type="number";
    input.id="differenziale";
    input.value="0";
    div.appendChild(label); 
    div.appendChild(input); 
    container.appendChild(div);


    var div = document.createElement("div"); // creo box per la form di previsione
    var p = document.createElement("p");
    div.id = "box_vettore";
    p.id = "title_vettore";
    p.appendChild(document.createTextNode("Vettore di previsione"));
    div.appendChild(p);

    container.appendChild(div);
    

      for(var i = 0 ; i < dim; ++i){

        var form = document.createElement("form");
        form.id="myForm_radio" + i;
        form.action = "";
        var fieldset = document.createElement("fieldset");
        var legend = document.createElement("legend");
        legend.appendChild(document.createTextNode("Domanda "+ (i+1)));
        fieldset.appendChild(legend);


        for (var n = -1; n < 2; ++n) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(n));
            var input = document.createElement("input");
            input.name = "risposta" + i;
            input.value = n;
            input.type = "radio";
            
            if(n==0)
              input.checked = true;

            fieldset.appendChild(label);
            fieldset.appendChild(input);

        }
        form.appendChild(fieldset);

    container.appendChild(form);
      }



    var input = document.createElement("input"); // bottone che attiva la previsione
    input.id = "button_prevision";
    input.type = "submit";
    input.value = "prevision trainer";
    input.setAttribute('onclick', 'prevision()'); // 
    container.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti 
    div.appendChild(input); //appendo prevision
}



