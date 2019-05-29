/** @function generator_input
 *  @param dim_vettore dimensione del vettore che dovra' essere generato 
 *  @returns vector ritorna un vettore con dim_vettore di dimensione, ove per ogni cella si trova uno tra i seguenti valori:
 *  - -1: in un numero randomico di celle.
 *  - 0:  se una domanda ha valore 0 significa che gli eventuali fratelli avranno valore 0 come i padri perche' di pari e superiore complessita', 
     per i figli non puo' ancora nulla perche' di difficolta' inferiore.
    - 1: se una domanda ha valore 1 significa che tutte le eventuali domande figlie  e fratelli avranno valore 1 perche' di pari o inferiore 
    difficolta', per i padri non posso ancora dire nulla perche' di difficolta' superiore.
 */


function generator_input(dim_vettore) {
    var vector = [];
    var valore = -1;
    var numero_meno1 = Math.floor(Math.random() * 2); // generazione numero di -1 che devranno essere presenti nel vettore di training del dato
    // posizionati in vector gli 1 e gli 0
    var i = 0;
    while (i < dim_vettore - numero_meno1) {
        // setto se mettere a 0 o 1 la riposta
        if (valore == -1 || valore == 0)
            valore = 1;
        else
            valore = 0;

      
        var posizione_random = Math.floor(Math.random() * 5); // generazione di un numero casuale intero compreso tra 0 e 5 in qui allocare il primo valore del vettore di training

        if (vector[posizione_random] == null) { // controllo che la cella non sia gia' occupata ;
            vector[posizione_random] = valore;
            i = i + 1;// nuova cella occupata

            // controlli sul grafo

            /**
             * Regole: se una domanda ha valore 1 significa che tutte le eventuali domande figlie  e fratelli avranno valore 1 perche' di pari o inferiore 
             * difficolta', per i padri non posso ancora dire nulla perche' di difficolta' superiore.
             * Se una domanda ha valore 0 significa che gli eventuali fratelli avranno valore 0 come i padri perche' di pari e superiore complessita', 
             * per i figli non puo' ancora nulla perche' di difficolta' inferiore.
             */

            if (posizione_random == 0) {

                if (valore == 1) {
                    if (i + numero_meno1 < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                }

                else {

                    if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                        vector[2] = 0;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                        vector[5] = 0;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[3] == null) {
                        vector[3] = 0;
                        i = i + 1;
                    }

                }
            }


            else if (posizione_random == 1) {
                if (i + numero_meno1 < dim_vettore && vector[4] == null) {
                    vector[4] = valore;
                    i = i + 1;
                }
            }



            else if (posizione_random == 2) {

                if (valore == 1) {
                    if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                        vector[5] = 1;
                        i = i + 1;
                    }
                }

                else {
                    if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                        vector[5] = 0;
                        i = i + 1;
                    }
                }


            }


            else if (posizione_random == 3) {

                if (valore == 1) {
                    if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                }
                else {
                    if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                        vector[2] = 0;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[5] == null) {
                        vector[5] = 0;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                        vector[0] = 0;
                        i = i + 1;
                    }
                }


            }




            else if (posizione_random == 4) {
                if (i + numero_meno1 < dim_vettore && vector[1] == null) {
                    vector[1] = valore;
                    i = i + 1;
                }

            }


            else if (posizione_random == 5) {
                if (valore == 1) {
                    if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                        vector[2] = 1;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i + numero_meno1 < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                    else {
                        if (i + numero_meno1 < dim_vettore && vector[2] == null) {
                            vector[2] = 0;
                            i = i + 1;
                        }
                    }

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