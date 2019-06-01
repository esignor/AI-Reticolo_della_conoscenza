/** @function generator_input_probability
 *  @param dim dimensione del vettore che dovra' essere generato 
 *  @returns cun vettore ranfom che mappa le risposte del candidato sulla rete
**/


function generator_input_probability(dim_vettore) {
    var vector = [];
    var valore = -1;
    var numero_meno1 = Math.floor(Math.random() * 3); // generazione numero di -1 che devranno essere presenti nel vettore di training del dato
    // posizionati in vector gli 1 e gli 0
    var i = 0;
    while (i < dim_vettore - numero_meno1) {


        var posizione_random = Math.floor(Math.random() * 6); // numero della domanda estratta di indice da 0 a 5

        if (vector[posizione_random] == null) { // controllo che la cella non sia gia' occupata ;
            vector[posizione_random] = valore;
            i = i + 1;// nuova cella occupata

            // controlli sul grafo

            /**
             * Regole: Per una domanda va valutata anche la domanda sorella. Se entrambe hanno lo stesso valore allora nel caso di 0 i genitori saranno settati
             * a 0, se hanno entrambe valore 1 allora i figli saranno settati a 1. Tutto questo viene calcolato tenedo presente la probabilita' effettiva per un
             * candidato di rispondere correttamente ad una domanda P(A) = 1/3 + 1/6*s1 + 2/3*s2
             */

            // calcolo la probabilita' che il candidato dia la risposta corretta;
            valore = calcolo_risposta_probabilita();

            if (posizione_random == 0) { // domanda 1

                if (i + numero_meno1 < dim_vettore && vector[3] == null) { // calcolo la probabilita' che la domanda 4 sia data in modo corretto
                    vector[3] = valore;
                    i = i + 1;
                }

                if (vector[3] == 0 && vector[0] == 0) { // sia la domanda 4 che 1 sono state date sbagliate, i padri che sono piu' complessi saranno sicuramente errati
                    if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                        vector[2] = 0;
                        i = i + 1;
                    }

                    if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                        vector[5] = 0;
                        i = i + 1;
                    }
                }
                // else negli altri casi non posso dire nulla ora



            }


            else if (posizione_random == 1) { // domanda 2 
                if (i + numero_meno1 < dim_vettore && vector[4] == null) {
                    vector[4] = valore;
                    i = i + 1;
                }
            }



            else if (posizione_random == 2) { // domanda 3

                if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                    vector[5] = valore;
                    i = i + 1;
                }
                if (vector[2] == 1 && vector[5] == 1) {
                    if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }


                }


                else if (posizione_random == 3) { // domanda 4

                    if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                        vector[0] = valore;  // sia che risulti che la domanda 1 viene data corretta o meno posso settare solo tale domanda
                        i = i + 1;
                    }

                    if (vector[3] == 0 && vector[1] == 0) { // i genitori sono conseguentemente sbagliati altrimenti non posso dire nulla
                        if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                            vector[2] = 0;
                            i = i + 1;
                        }
                        if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                            vector[5] = 0;
                            i = i + 1;
                        }

                    }


                }





                else if (posizione_random == 4) { // domanda 5
                    if (i + numero_meno1 < dim_vettore && vector[1] == null) {
                        vector[1] = valore;
                        i = i + 1;
                    }

                }


                else if (posizione_random == 5) {

                    if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                        vector[2] = valore;
                        i = i + 1;
                    }


                    if (vector[2] == 1 && vector[5] == 1) {
                        if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                            vector[0] = 1;
                            i = i + 1;
                        }
                        if (i + numero_meno1 < dim_vettore && vector[3] == null) {
                            vector[3] = 1;
                            i = i + 1;
                        }
                    }
                    // else negli altri casi non posso dire nulla
                }

            }
        }
    }

    // posizionati in vector i -1
    valore = -1;
    for (var i = 0; i < numero_meno1; ++i) {
        var posizioni_meno1 = Math.floor(Math.random() * 6); // individuazioni delle posizioni del vettore dove mettere -1


        if (vector[posizioni_meno1] == null)
            vector[posizioni_meno1] = valore;
        else
            i = i - 1; // la posizioni_meno1 non e' una posizione valida in quanto occupata
    }
    return vector;


}
/** @function calcolo_risposta_probabilita
 *  calcola in base alla probabilita' che un candidato ha di dare la risposta corretta se un candidato sa dare una risposta o meno ad una domanda,
 *  si fa uso della formula 1/3 + 1/6 s1 + 2/3 s2
 *  @return 0 se un candidato n non sa dare la risposta, 1 altriment
 */ 

function calcolo_risposta_probabilita() {

    // uso che s0 + s1 + s2 = 1 -> s0 = 0, s1+s2 = 1 e s1 = -s2+1 uso P(A) = 1/3 + 1/6 s1 + 2/3 s2
    // capire se il candidato sa ha la conoscenza per rispondere correttamente alla domanda o meno

    //valuta  la capacita' quando un candidato non sa la domanda per certo/parzialmente/non la sa proprio o  la sa

    var candidato_scarto1 = Math.floor(Math.random() * 2); // il candidato e' in grado di scartarne 1?
    if (!candidato_scarto1) // non ne sa scartare nessuna, calcolo il fattore fortuna
        return Math.floor(1 / 3 * ((Math.floor(Math.random() * 3) + 1))); // ha una possibilta' su 3 di azzeccare la risposta  -> 1/3
    else { // ne sa scartare una
        var candidato_scarto2 = Math.floor(Math.random() * 3); // il candi+ dato e' in grado di scartarne 2?
        if (!candidato_scarto2) // ne sa scartare una; ma non 2
            return Math.floor(1 / 2 * ((Math.floor(Math.random() * 2) + 1)));// ha 1 possibilita' su 2 di saper rispondere giusto + il fattore fortuna -> 1/3 + 1/6 s1 -> s1 = 1 allora 1/3 + 1/6 = (2+1)/6 = 1/2
        else // ne sa scartare 2
            return 1;  // -> 1/3 + 2/3 s2 -> s2 = 1 allore 1/3 + 2/3 = 3/3 =1
    }

}
