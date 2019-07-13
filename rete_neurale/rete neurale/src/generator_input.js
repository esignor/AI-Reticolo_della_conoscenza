/** @function generator_input
 *  @param {*} dim_vettore dimensione del vettore che dovra' essere generato 
 *  @returns vector ritorna un vettore con dim_vettore di dimensione, ove per ogni cella si trova uno tra i seguenti valori:
 *  - 0: domanda non fatta -> in un numero randomico di celle.
 *  - -1:  domanda a cui il canditato ha risposto sbagliato -> se una domanda ha valore 0 significa che gli eventuali fratelli avranno valore 0 come i padri perche' di pari e superiore complessita', 
     per i figli non puo' ancora nulla perche' di difficolta' inferiore.
    - 1: domanda a cui il candidato a risposto correttamente -> se una domanda ha valore 1 significa che tutte le eventuali domande figlie  e fratelli avranno valore 1 perche' di pari o inferiore 
    difficolta', per i padri non posso ancora dire nulla perche' di difficolta' superiore.
 */

generator_input = function (dim_vettore) {
    var vector = [];
    var valore = 0;
    var numero_zero = Math.floor(Math.random() * 3); // generazione numero di 0 che devranno essere presenti nel vettore di training del dato da 0 a 2
    // posizionati in vector gli 1 e gli 0
    var i = 0;
    while (i < dim_vettore - numero_zero) {
        // setto se mettere a 0 o 1 la riposta
        if (valore == -1 || valore == 0)
            valore = 1;
        else
            valore = -1;


        var posizione_random = Math.floor(Math.random() * 6); // generazione di un numero casuale intero compreso tra 0 e 5 in qui allocare il primo valore del vettore di training

        if (vector[posizione_random] == null) { // controllo che la cella non sia gia' occupata
            vector[posizione_random] = valore;
            i = i + 1;// nuova cella occupata

            // controlli sul grafo

            /**
             * Regole: se una domanda ha valore 1 significa che tutte le eventuali domande figlie  e fratelli avranno valore 1 perche' di pari o inferiore 
             * difficolta', per i padri non posso ancora dire nulla perche' di difficolta' superiore.
             * Se una domanda ha valore -1 significa che gli eventuali fratelli avranno valore -1 come i padri perche' di pari e superiore complessita', 
             * per i figli non puo' ancora nulla perche' di difficolta' inferiore.
             */
            if (posizione_random == 0) {

                if (valore == 1) {
                    if (i + numero_zero < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                }

                else {

                    if (i + numero_zero < dim_vettore && vector[2] == null) {
                        vector[2] = -1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[5] == null) {
                        vector[5] = -1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[3] == null) {
                        vector[3] = -1;
                        i = i + 1;
                    }

                }
            }


            else if (posizione_random == 1) {
                if (i + numero_zero < dim_vettore && vector[4] == null) {
                    vector[4] = valore;
                    i = i + 1;
                }
            }



            else if (posizione_random == 2) { // posizione 3

                if (valore == 1) {
                    if (i + numero_zero < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[5] == null) {
                        vector[5] = 1;
                        i = i + 1;
                    }
                }

                else {
                    if (i + numero_zero < dim_vettore && vector[5] == null) {
                        vector[5] = -1;
                        i = i + 1;
                    }
                }


            }


            else if (posizione_random == 3) {

                if (valore == 1) {
                    if (i + numero_zero < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                }
                else {
                    if (i + numero_zero < dim_vettore && vector[2] == null) {
                        vector[2] = -1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[5] == null) {
                        vector[5] = -1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[0] == null) {
                        vector[0] = -1;
                        i = i + 1;
                    }
                }


            }




            else if (posizione_random == 4) {
                if (i + numero_zero < dim_vettore && vector[1] == null) {
                    vector[1] = valore;
                    i = i + 1;
                }

            }


            else if (posizione_random == 5) {

                if (valore == 1) {
                    if (i + numero_zero < dim_vettore && vector[2] == null) {
                        vector[2] = 1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i + numero_zero < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                }
                else {
                    if (i + numero_zero < dim_vettore && vector[2] == null) {
                        vector[2] = -1;
                        i = i + 1;
                    }

                }
            }

        }
    }

    // posizionati in vector dim_vettore - numero_zero valori
    valore = 0;
    for (var i = 0; i < numero_zero; ++i) {
        var posizioni_zero = Math.floor(Math.random() * 6); // individuazioni delle posizioni del vettore dove mettere 0


        if (vector[posizioni_zero] == null)
            vector[posizioni_zero] = valore;
        else
            i = i - 1; // la posizioni_zero non e' una posizione valida in quanto occupata
    }
    return vector;

}
