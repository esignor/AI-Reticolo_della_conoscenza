/** @function writeDocument
 * il metodo ha lo scopo di stampare su browser i dati dell'addestramento
 */

function writeDocument() {
   var id_domande = ["aelkshwnzj", "bajsownqty", "bdwjgxtdsm", "bfmfxcudzq", "bkfstjjeaw", "bojihohutw", "ccsofpywab", "cfkjhtcjjp", "cfxigdfgsu", "cidpdlimnu", "cxjganjqsl", "cxwrjrltfv", "diucioyoxo", "dpzaqasqro", "ectvbesohs", "efbcntiwcr", "elbottcdse", "fbekkymdja", "fclxhnodej", "flsdkdhwpz", "fpiajgnnfb", "fupxesqveq", "fvwcpjdfai", "gilviisrcb", "gxushjkzth", "hacwlyvymr", "heohdfuqpi", "heusbnnnto", "hxsywnmxdd", "iesmuuktcs", "ifrcopoblv", "iojsfvnpii", "islhstwuay", "jgcxaxgrrw", "jnxymdjdxl", "jomkrqdwwr", "jwvreihjvv", "jygnlagbhv", "kkhcmynavp", "kprsxjkubz", "kzorhoohrb", "lhuxxlqtyz", "ljypeljfkh", "lqyvhqfmqd", "lrqrblychp", "mfycpmjyzc", "mhaimflmrt", "mnrnuysydx", "ngtquzulpk", "nrawevuhkv", "oaszeadbqh", "obwqtgpxek", "okklvldqlc", "osvluiqhbp", "pfctjunpxs", "pfsvqgsfen", "poiuytrewq", "ptfkuubpyy", "ptwccskjcf", "pxvpfrjqnb", "qbnjsxmnxx", "qfxndoiusk", "qmzlhizqng", "qsqbqjczyv", "ribhqompcp", "sucpsfikqd", "tnmucbefiy", "tocsjuegmj", "tpfgrbtdur", "ukafbvkjxl", "ungslccrdw", "uoohruqjig", "uoztprdkre", "upmqfdzqqd", "voqwkjnxuv", "vtjiowgfxp", "wfthuqobvv", "wpfhnhktzw", "wqkhvmdpol", "xmqopkamew", "xnyfhvvlzx", "xvbullwvol", "yxkoznnxis", "zcflqcwpgh", "zegfndrnwr", "zptjzdwilf", "zqrfurehmz", "zrehhcvjyl", "zvlwoledbc"]
   document.write("<table><tr>");
   document.write("<td>" + "Test / Domande"+ "</td>");
   for(var i = 0; i < id_domande.length; ++i)
     document.write("<td>" + id_domande[i] + "</td>");
    document.write("</tr>");

    for(var i = 0; i < vectorCSV.length; ++i){
    document.write("<tr>");
    document.write("<td>" + Test[i] + "</td>");
     for(var j = 0; j<89; ++j){
        document.write("<td>" + vectorCSV[i][j] + "</td>");

     }
     document.write("</tr>");

    }


    document.write("</table>");
}