/** @function generator_input_pure
 *  @param {*} dim_vettore dimensione del vettore che dovra' essere generato 
 *  @returns vector ritorna un vettore con dim_vettore di dimensione, ove per ogni cella si trova uno tra i seguenti valori:.
 *  - -1:  domanda a cui il canditato ha risposto sbagliato -> se una domanda ha valore 0 significa che gli eventuali fratelli avranno valore 0 come i padri perche' di pari e superiore complessita', 
     per i figli non puo' ancora nulla perche' di difficolta' inferiore.
    - 1: domanda a cui il candidato a risposto correttamente -> se una domanda ha valore 1 significa che tutte le eventuali domande figlie  e fratelli avranno valore 1 perche' di pari o inferiore 
    difficolta', per i padri non posso ancora dire nulla perche' di difficolta' superiore.
 */

generator_input_pure = function (dim_vettore) {
    var vector = [];
    var valore = 0;
    var i = 0;
    while (i < dim_vettore) {
        // setto se mettere a 0 o 1 la riposta
        if (valore == -1)
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
                    if (i < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                }

                else {

                    if (i < dim_vettore && vector[2] == null) {
                        vector[2] = -1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[5] == null) {
                        vector[5] = -1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[3] == null) {
                        vector[3] = -1;
                        i = i + 1;
                    }

                }
            }


            else if (posizione_random == 1) {
                if (i < dim_vettore && vector[4] == null) {
                    vector[4] = valore;
                    i = i + 1;
                }
            }



            else if (posizione_random == 2) { // posizione 3

                if (valore == 1) {
                    if (i < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[5] == null) {
                        vector[5] = 1;
                        i = i + 1;
                    }
                }

                else {
                    if (i < dim_vettore && vector[5] == null) {
                        vector[5] = -1;
                        i = i + 1;
                    }
                }


            }


            else if (posizione_random == 3) {

                if (valore == 1) {
                    if (i < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                }
                else {
                    if (i < dim_vettore && vector[2] == null) {
                        vector[2] = -1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[5] == null) {
                        vector[5] = -1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[0] == null) {
                        vector[0] = -1;
                        i = i + 1;
                    }
                }


            }




            else if (posizione_random == 4) {
                if (i < dim_vettore && vector[1] == null) {
                    vector[1] = valore;
                    i = i + 1;
                }

            }


            else if (posizione_random == 5) {

                if (valore == 1) {
                    if (i < dim_vettore && vector[2] == null) {
                        vector[2] = 1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[0] == null) {
                        vector[0] = 1;
                        i = i + 1;
                    }
                    if (i < dim_vettore && vector[3] == null) {
                        vector[3] = 1;
                        i = i + 1;
                    }
                }
                else {
                    if (i < dim_vettore && vector[2] == null) {
                        vector[2] = -1;
                        i = i + 1;
                    }

                }
            }

        }
    }

    return vector;

}
