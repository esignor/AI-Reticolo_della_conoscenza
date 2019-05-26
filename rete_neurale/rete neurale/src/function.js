
function reload() {
    eval($("#layerdef").val());

    // enter buttons for layers
    var t = '';
    for (var i = 1; i < net.layers.length - 1; i++) { // ignore input and regression layers (first and last)
        var butid = "button" + i;
        t += "<input id=\"" + butid + "\" value=\"" + net.layers[i].layer_type + "(" + net.layers[i].out_depth + ")" + "\" type=\"submit\" onclick=\"updateLix(" + i + ")\" style=\"width:80px; height: 30px; margin:5px;\";>";
    }
    $("#layer_ixes").html(t);
    $("#button" + lix).css('background-color', '#FFA');
    $("#cyclestatus").html('drawing neurons ' + d0 + ' and ' + d1 + ' of layer with index ' + lix + ' (' + net.layers[lix].layer_type + ')');
}


function updateLix(newlix) {
    $("#button" + lix).css('background-color', ''); // erase highlight
    lix = newlix;
    d0 = 0;
    d1 = 1; // reset these
    $("#button" + lix).css('background-color', '#FFA');

    $("#cyclestatus").html('drawing neurons ' + d0 + ' and ' + d1 + ' of layer with index ' + lix + ' (' + net.layers[lix].layer_type + ')');
}



function random_data() {
    data = [];
    labels = [];
    for (var k = 0; k < 40; k++) {
        data.push([convnetjs.randf(-3, 3), convnetjs.randf(-3, 3)]); labels.push(convnetjs.randf(0, 1) > 0.5 ? 1 : 0);
    }
    N = labels.length;
}


function circle_data() {
    data = [];
    labels = [];
    for (var i = 0; i < 50; i++) {
        var r = convnetjs.randf(0.0, 2.0);
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
}


function update() { // permette di fare il training del dato
    // forward prop the data

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





function draw() {

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
}



function deleteForm(form) {
    //console.log(Array.prototipe.slice.call(arguments));
    if (form.value == 'input')
        document.myFormInp.inp_coord.value = ""; // reset della coordinata input
    else
        document.myFormOut.out_coord.value = ""; // reset della coordinata output
}



// una volta premuto il pulsante di save nel form relativo agli Input questi vengono salvati
function formSubmitInput() {  // stampo il contenuto dell'array
    console.log("sveglia_submit input");

    var x = document.getElementsByClassName("input"); // per avere il contenuto delle celle di input
    var i;
    for (i = 0; i < x.length; i++) {
        ArrayInput[i] = x[i].value;
    }
    console.log(ArrayInput);
}

// una volta premuto il pulsante di save nel form relativo agli Output questi vengono salvati
function formSubmitOutput() { 
    console.log("sveglia_submit output");
    var x = document.getElementsByClassName("output"); // per avere il contenuto delle celle di  output
    var i;
    for (i = 0; i < x.length; i++) {
        ArrayOutput[i] = x[i].value;
    }
    console.log(ArrayOutput);
}

// metodo che si preoccupa di aggiungere n campi nei box di Input e Output
function addFields() {
    // Number of inputs to create
    var number = document.getElementById("member").value;
    console.log(number);
    //controllo field: deve essere stato inserito un numero
    if (number == "" || isNaN(number) || parseInt(number)<0 || parseInt(number.value) > 9999){
      alert("Inserire un numero di fields numerico intero");
      return;
    }

    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    // creazione box di Input
    var div = document.createElement("div"); // creo box per la form di input
    div.id="box_input";
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
    input.id ="button_newfield";
    input.type = "submit";
    input.name = "save";
    input.value = "save";
    input.setAttribute('onclick', 'formSubmitInput()'); // premo save, salvo i valori di input su un array
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti  
    div.appendChild(input); //appendo save a box_input
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti  
    
    container.appendChild(div); // appendo box_input a container


    // creazione box di Output
    var div = document.createElement("div"); // creo box per la form di output
    div.id="box_output";
    for (var j = 0; j < number; j++) {
        // Append a node with a random text
        div.appendChild(document.createTextNode("Output" + (j + 1)));
        // Create an <input> element, set its type and name attributes
        var select= document.createElement("select"); // creo la select
        select.name="field_value"; //attributo della select
        select.classList.add("output");
        for(n=-1; n<2; ++n){
          var option = document.createElement("option");
          option.value = n;

        div.appendChild(select); //al div ci appendo la select
        select.appendChild(option); //al select ci appendo option
        option.appendChild(document.createTextNode(n)); //a option ci appendo la label
        }
    }

    var input = document.createElement("input");
    input.id ="button_newfield";
    input.type = "submit";
    input.name = "save";
    input.value = "save";
    input.setAttribute('onclick', 'formSubmitOutput()'); // premo save, salvo i valori di output su un array
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti 
    div.appendChild(input); //appendo save a box_output
    div.appendChild(document.createElement("br")) // quando faccio il submit i valori dei campi sono inseriti   

    container.appendChild(div); // appendo box_output a container
}

/*<form>
<fieldset>
<legend>Siti per webmaster</legend>
<select name="siti" >
<option value="http://www.html.it" selected="selected">www.html.it </option>
<option value="http://freephp.html.it">frephp.html.it </option>
<option value="http://freasp.html.it">freasp.html.it </option>
</select>
</fieldset>
</form>*/
