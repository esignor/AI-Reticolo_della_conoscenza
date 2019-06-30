/** @function printTextarea
 * 
 * @param {*} param_layer testo gia' presente nella textarea della rete
 * @param {*} new_text nuovo testo da accodare a quello preesistente
 * metodo che si occupa di stampare all'interno della textarea della rete
 */
function printTextarea(param_layer, new_text){
    if(param_layer == 0)
      layer_exe = new_text;
    else
      layer_exe = param_layer + new_text;

    $("#layerexe").val(layer_exe);
}