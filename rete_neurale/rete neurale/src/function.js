
function reload() {
    eval($("#layerdef").val());

    // enter buttons for layers
   // var t = '';
    //for (var i = 1; i < net.layers.length - 1; i++) { // ignore input and regression layers (first and last)
        //var butid = "button" + i;
        //t += "<input id=\"" + butid + "\" value=\"" + net.layers[i].layer_type + "(" + net.layers[i].out_depth + ")" + "\" type=\"submit\" onclick=\"updateLix(" + i + ")\" style=\"width:80px; height: 30px; margin:5px;\";>";
    }
  // $("#layer_ixes").html(t);
   // $("#button" + lix).css('background-color', '#FFA');
   //$("#cyclestatus").html('drawing neurons ' + d0 + ' and ' + d1 + ' of layer with index ' + lix + ' (' + net.layers[lix].layer_type + ')');
//}


//function updateLix(newlix) {
    //$("#button" + lix).css('background-color', ''); // erase highlight
    //lix = newlix;
    //d0 = 0;
    //d1 = 1; // reset these
    //$("#button" + lix).css('background-color', '#FFA');

    //$("#cyclestatus").html('drawing neurons ' + d0 + ' and ' + d1 + ' of layer with index ' + lix + ' (' + net.layers[lix].layer_type + ')');
//}



//function random_data() {
    //data = [];
    //labels = [];
    //for (var k = 0; k < 40; k++) {
       // data.push([convnetjs.randf(-3, 3), convnetjs.randf(-3, 3)]); labels.push(convnetjs.randf(0, 1) > 0.5 ? 1 : 0);
   // }
    //N = labels.length;
//}


//function circle_data() {
    //data = [];
    //labels = [];
    //for (var i = 0; i < 50; i++) {
       /* var r = convnetjs.randf(0.0, 2.0);
        var t = convnetjs.randf(0.0, 2 * Math.PI);
        data.push([r * Math.sin(t), r * Math.cos(t)]);
        labels.push(1);
    }
    for (var i = 0; i < 50; i++) {
        var r = convnetjs.randf(3.0, 5.0);
        //var t = convnetjs.randf(0.0, 2*Math.PI);
        var t = 2 * Math.PI * i / 50.0
        data.push([r * Math.sin(t), r * Math.cos(t)]);
        labels.push(0);
    }
    N = data.length;
}*/


function update() { // permette di fare il training del dato
  
    console.log("inizio dell'allenamento per i dati inseriti");

    N = ArrayInput.length;

    var start = new Date().getTime();

    var x = new convnetjs.Vol(1, 1, 6); // parametri passati alla rete (larghezza, altezza, profondita')
    //x.w = data[ix];
    var avloss = 0.0; // calcolo della perdita
    for (var iters = 0; iters < 20; iters++) { // ho il dubbio che iteri solo per perfezionare l'apprendimento
        for (var ix = 0; ix < N; ix++) {
            x.w = ArrayInput[ix];
            var stats = trainer.train(x, ArrayOutput[ix]);
            avloss += stats.loss;
        }
    }
    avloss /= N * iters;

    var end = new Date().getTime();
    var time = end - start;

}





/*function draw() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    var netx = new convnetjs.Vol(1, 1, 2);
    // draw decisions in the grid
    var density = 5.0;
    var gridstep = 2;
    var gridx = [];
    var gridy = [];
    var gridl = [];
    for (var x = 0.0, cx = 0; x <= WIDTH; x += density, cx++) {
        for (var y = 0.0, cy = 0; y <= HEIGHT; y += density, cy++) {
            //var dec= svm.marginOne([(x-WIDTH/2)/ss, (y-HEIGHT/2)/ss]);
            netx.w[0] = (x - WIDTH / 2) / ss;
            netx.w[1] = (y - HEIGHT / 2) / ss;
            var a = net.forward(netx, false);

            if (a.w[0] > a.w[1]) ctx.fillStyle = 'rgb(175, 134, 216)';
            else ctx.fillStyle = 'rgb(23, 214, 68)';

            //ctx.fillStyle = 'rgb(150,' + Math.floor(a.w[0]*105)+150 + ',150)';
            //ctx.fillStyle = 'rgb(' + Math.floor(a.w[0]*255) + ',' + Math.floor(a.w[1]*255) + ', 0)';
            ctx.fillRect(x - density / 2 - 1, y - density / 2 - 1, density + 2, density + 2);

            if (cx % gridstep === 0 && cy % gridstep === 0) {
                // record the transformation information
                var xt = net.layers[lix].out_act.w[d0]; // in screen coords
                var yt = net.layers[lix].out_act.w[d1]; // in screen coords
                gridx.push(xt);
                gridy.push(yt);
                gridl.push(a.w[0] > a.w[1]); // remember final label as well
            }
        }
    }

    // draw axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(50,50,50)';
    ctx.lineWidth = 1;
    ctx.moveTo(0, HEIGHT / 2);
    ctx.lineTo(WIDTH, HEIGHT / 2);
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();

    // draw representation transformation axes for two neurons at some layer
    var mmx = cnnutil.maxmin(gridx);
    var mmy = cnnutil.maxmin(gridy);
    visctx.clearRect(0, 0, visWIDTH, visHEIGHT);
    visctx.strokeStyle = 'rgb(0, 0, 0)';
    var n = Math.floor(Math.sqrt(gridx.length));
    var ng = gridx.length;
    var c = 0; // counter
    visctx.beginPath()

    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 1;
    for (var i = 0; i < N; i++) {

        if (labels[i] == 1) ctx.fillStyle = 'rgb(43, 155, 69)'; // colore dei pallini
        else ctx.fillStyle = 'rgb(122, 24, 249)';

        drawCircle(data[i][0] * ss + WIDTH / 2, data[i][1] * ss + HEIGHT / 2, 5.0); // per posizionare i punti

    }
}*/


/** function abilita_trainer()
 *  metodo che ha il compito di rendere visibile all'utente il pulsante che abilita il trainer set dei dati
 */
function abilita_trainer(){
console.log("bottone di trainer abilitato?");
console.log(ArrayInput[0] + ArrayOutput[0] + ArrayInput.length +  ArrayOutput.length);
if(ArrayInput[0] != "" && ArrayOutput[0] != "" && ArrayInput.length == ArrayOutput.length){ // controllo dei dati di allenameto, devono essere inseriti e salvati negli appositi contenitori
  document.myForm.button_trainer.style.display= "inline";
  console.log("bottone di trainer abilitato");
}
}



/** function formSubmit(operazione)
 * @param {String} operazione contenente la voce input oppure output
 * metodo che ha il compito, una volta che l'utente ha premuto il pulsante di save di salvare i dati all'interno degli array specifici
 *  (ArrayInput e ArrayOutput). Metodo che viene chiamato da addFields
 **/
function formSubmit(operazione) {
    var x = document.getElementsByClassName(operazione); // per avere il contenuto delle celle di  output
    console.log("x"+x.length);
    var i;
    for (i = 0; i < x.length; i++) {
        if (operazione == "input") {
            var number = x[i].value;
            console.log("number " + number);
            if (controlValue(number))
                ArrayInput[i] = number;
            else return;
        }
        else{
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
    if (!controlValue(number)) return;;//controllo field: deve essere stato inserito un numero

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

    container.appendChild(div); // appendo box_output a container
}


