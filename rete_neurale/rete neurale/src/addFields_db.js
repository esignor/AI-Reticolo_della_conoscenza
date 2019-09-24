
/** @function addFields_db
 * @param dim dimensione di input e output della rete
 * metodo che ha il compito di aggiungere n campi definiti dall'utente nei box di input, di istanziare i rispettivi pulsanti di save e di, a
 * a evento submit innescato, demandare il salvataggio dei dati al metodo di formSubmit
 */

function addFields_db(dim){
  if(layer_exe == null)
    layer_exe = 0;
  printTextarea(layer_exe, "Richiesta di inserimento: \n\- Parametri di differenziale tra le domande (valore valido >= 0). Utili per creare dei cluster parametrizzati in base al codice del colore \n\- Dati del vettore previsione" + "\n\Successivamente premere il pulsante di previsione")


 document.getElementById("title_previsione").style.display = "inline";
 document.getElementById("container").style.display = "inline";
 document.getElementById("myCanvas-detail").style.display = "none";
 document.getElementById("title_questionsdetail").style.display = "none";
 document.getElementById("link_createnumberfields").style.display = "none";

  var container = document.getElementById("container");
  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }
  var div = document.createElement("div"); // inserimento box per la dichiarazione del differenziale di accopiamento tra le domande
  div.id = "box_differenziale";
  var label=  document.createElement("label")
  label.for="differenziale_1param";
  label.appendChild(document.createTextNode("Differenziale di accoppiamento: "));
  var input = document.createElement("input");
  input.name="differenziale_1param" ;
  input.type="text";
  input.id="differenziale_1param";
  input.value="0";
  div.appendChild(label); 
  div.appendChild(input); 
  container.appendChild(div);

  var input = document.createElement("input");
  input.name="differenziale_2param" ;
  input.type="text";
  input.id="differenziale_2param";
  input.value="0";
  div.appendChild(input); 
  container.appendChild(div);


  var input = document.createElement("input");
  input.name="differenziale_3param" ;
  input.type="text";
  input.id="differenziale_3param";
  input.value="0";
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
      fieldset.className  = "fieldset_border";
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
  input.value = "previsione sull'addestramento";
  input.setAttribute('onclick', 'contentMethod_db("prevision_db")'); // 
  container.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti 
  div.appendChild(input); //appendo prevision
}



