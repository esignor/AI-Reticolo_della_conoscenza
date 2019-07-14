/** @function writeDocument_db
  * @param {*} dim dimensione di input e output della rete
 * il metodo ha lo scopo di stampare su browser i dati dell'addestramento
 */

writeDocument_db  = function(dim) {
   var id_domande = [];
   if(dim == 89)
     id_domande = ["aelkshwnzj", "bajsownqty", "bdwjgxtdsm", "bfmfxcudzq", "bkfstjjeaw", "bojihohutw", "ccsofpywab", "cfkjhtcjjp", "cfxigdfgsu", "cidpdlimnu", "cxjganjqsl", "cxwrjrltfv", "diucioyoxo", "dpzaqasqro", "ectvbesohs", "efbcntiwcr", "elbottcdse", "fbekkymdja", "fclxhnodej", "flsdkdhwpz", "fpiajgnnfb", "fupxesqveq", "fvwcpjdfai", "gilviisrcb", "gxushjkzth", "hacwlyvymr", "heohdfuqpi", "heusbnnnto", "hxsywnmxdd", "iesmuuktcs", "ifrcopoblv", "iojsfvnpii", "islhstwuay", "jgcxaxgrrw", "jnxymdjdxl", "jomkrqdwwr", "jwvreihjvv", "jygnlagbhv", "kkhcmynavp", "kprsxjkubz", "kzorhoohrb", "lhuxxlqtyz", "ljypeljfkh", "lqyvhqfmqd", "lrqrblychp", "mfycpmjyzc", "mhaimflmrt", "mnrnuysydx", "ngtquzulpk", "nrawevuhkv", "oaszeadbqh", "obwqtgpxek", "okklvldqlc", "osvluiqhbp", "pfctjunpxs", "pfsvqgsfen", "poiuytrewq", "ptfkuubpyy", "ptwccskjcf", "pxvpfrjqnb", "qbnjsxmnxx", "qfxndoiusk", "qmzlhizqng", "qsqbqjczyv", "ribhqompcp", "sucpsfikqd", "tnmucbefiy", "tocsjuegmj", "tpfgrbtdur", "ukafbvkjxl", "ungslccrdw", "uoohruqjig", "uoztprdkre", "upmqfdzqqd", "voqwkjnxuv", "vtjiowgfxp", "wfthuqobvv", "wpfhnhktzw", "wqkhvmdpol", "xmqopkamew", "xnyfhvvlzx", "xvbullwvol", "yxkoznnxis", "zcflqcwpgh", "zegfndrnwr", "zptjzdwilf", "zqrfurehmz", "zrehhcvjyl", "zvlwoledbc"]
   else if (dim == 120)
     id_domande = ["aaxgbiwfen","adiueedxey", "afakgklfop","akczmgrdbq","asxurodfne","avagvdjdfu","axrvccwwsp","bbsurwinbt","biweemhojf","blhjkyufeg","bwodxllzmk","bwodxllzmk","csttpqoysn","culepaxyst","cuyddcrymb","cvnhqpgfyp","dagputfvei","dbuqwjsyvj","dkihxiceua","dkzgokqmiq","dlfyuvcbqx","dllpxhzfkt","dzxsvydlth","ebrpcrncwd","eftrkdthng","elqzybkpjl","enitorndkz","enmkdvzmyk","ewplljreqn","ffbcwwtnzk","fhqcltuqwl","fjmpjvualm","fkdgytnwzf","fumfugvkrl","fuzfbwlutx","fyrpicjqan","fzoxjumtyn","gtxwazgyqz","guatssqajf","gyerxpmgqa","hntvpqncrc","hyfoktjlpp","idfxvfzprt","ieimtqtzpk","iezewxpthv","ifrvxoopny","ifvdeyoyre","ikyqsdhuit","jbpjxhaxyy","jedvsptntk","jycipstmyp","kbnwlxqtqc","kexorxwipq","kfbpwmrkgz","kjecbikedc","kqkjrygfsc","kzzvvwynxn","lgiqayejyf","ljozpygnua","lohspalpqn","lzpqvyslrv","mdwdlplluz","mezjrkwdmi","mligaxxxyv","mljwybuamb","naywhaxocj","nqrcokzyep","oexeosrlxq","oldnuetsfx","ownmhihmlf","oxinyiwtdw","pdegmbefyz","pnornaipiy","pozlktnbwi","pralrcttdk","ptfyswhhoi","ptvnijvlyr","qfpxivqgfs","qhpmwyunln","qhurfzksbi","qyfsksfpqr","rcvjbkxijb","rfveenepae","rjqonwgagd","rjrbsovupf","rkpyhnweoz","rlbnjnuraa","rqlhmwvvfr","shwidpusut","slfnwkouex","soaxrpkmyx","tahwadyybr","tmalpukvph","tmptxxfqlg","twjbzfuzhs","uciubnhesv","uctsvufnre","ukteiawtcu","uoujmoastk","usloxptlnv","vcetherudx","vwesvpdxeu","wbimqkxjpk","wduzcrmbqr","wgqmilmeeo","wqoeigleak","wyidhotyrc","wyohxxjmbr","xcvjgpwpgd","xdfzuqqaxc","xdpxeikdtg","xxigdvhajv","xymzioajbw","yjakijsehd","ynkrhlsqhx","ypvazwngub","yvbkrvodje","zmivrwbcja","zriwusbhcv","zvsnjqiaqb"];
   else{
     for(var i = 0; i < dim; ++i)
      id_domande[i] = ["nome domanda sconosciuta"]
   }
   document.write("<table><tr>");
   document.write("<td>" + "Test / Domande"+ "</td>");
   for(var i = 0; i < id_domande.length; ++i)
     document.write("<td>" + id_domande[i] + "</td>"); // stampa l'intetazione della tabella con l'id delle domande
    document.write("</tr>");

    for(var i = 0; i < vectorCSV.length; ++i){ // in ogni riga della tabella
    document.write("<tr>");
    document.write("<td>" + vectorCSV[i][dim] + "</td>"); // stampa l'id del test
     for(var j = 0; j<dim; ++j){
        document.write("<td>" + vectorCSV[i][j] + "</td>"); // stampa le risposte al test

     }
     document.write("</tr>");

    }


    document.write("</table>");
}