/** @function saveDimensionNet_db
 *  salva la dimesione della Rete (= numero di domande da analizzare) scelta dall'utente  
 */
function saveNetDimension_db(){
    var dim = document.getElementById("select_dim").value;
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("container_body").style.display = "block";
    // chiamata quando tutti gli elementi DOM della pagina sono pronti per essere usati

        if(dim == 89){
        $("#layerdef").val(configure_db89()); // mostra la configurazione della rete nel primo box
        }
    
        if(dim == 120){
        $("#layerdef").val(configure_db120()); // mostra la configurazione della rete nel primo box
        }
    

}