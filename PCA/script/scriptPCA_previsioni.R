# SCRIPT R CHE HA COME OBIETTIVO TROVARE LA CORRELAZIONE ESISTENTE TRA LE PREVISIONI (USATO IN FASE DI TEST PER CONTROLLARE LA VALENZA POSITIVA DELLE RETI NEURALI NEL CALCOLARE LE PREVISIONI)

# Caricamento della libreria
library("factoextra")
options(max.print=10000)
df_numeric<-read.table("/home/eleonora/Scrivania/AI-Reticolo_della_conoscenza/PCA/trainset dati/previsioni_generatorinputpure.csv", header=FALSE, sep=",")  # carico il file csv
# calcolo il pca (centra automaticamente per avere la media a 0), ho preferito effettuare la standardizzazione a mano, facilitava la lettura dei dati nell'asse
res.pca <- prcomp(df_numeric, scale = FALSE) 
biplot(res.pca); # rappresentazione grafica


# standardizzazione dei valori: MI E' UTILE PER IL CALCOLO DEGLI AUTOVETTORI
df_numeric_aux = df_numeric
for(i in 1:6){
  df_numeric_aux[,i]=(df_numeric[,i]-mean(df_numeric[,i]))/(sd(df_numeric[,i]))
}

# Grafico delle variabili. Le variabili correlate positive indicano lo stesso
# lato della trama. Le variabili correlate negative puntano ai lati opposti
# del grafico.
fviz_pca_var(res.pca,
             col.var = "contrib", # Color by contributions to the PC
             gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
             repel = TRUE 
)



res.pca=princomp(df_numeric_aux)
biplot(res.pca) # rappresentazione grafica dei risultati ottenuti dalla pca standardizzata
cor.pca <- cor(df_numeric)


# Trasposizione dei dati in ordine decrescente di correlazione per ciascuna domanda
matrix <-matrix(nrow = 1, ncol = 6)
correlazione <- matrix(nrow = 6, ncol = 6)
for(r in 1:6){ 
  for(k in 1:6){
    matrix[k] = cor.pca[r,k]
  }
  for(i in 1:6){
    index  = which.max(matrix)
    correlazione[r, i] = index
    matrix[index] = -1000
  }
}

# RISULTATO: LO SCRIPT E' STATO PROVATO CON VETTORI PREVISIONI (es [1,0,0,0,0,0] o [-1,0,0,0,0,0] PER TUTTE LE 6 DOMANDE) PER VALUTARE CHE IL RISULTATO 
# DELLA PREVISIONE COMBACIASSE CON QUANTO DICHIARATO DAL MODELLO DELLA PCA.
# I RISULTATI OSSERVATI NELLA MATRICE CORRELLAZIONE SONO PIU' CHE BUONI, AL MASSIMO HO RISCONTRATO QUALCHE
# INCOERENZA CON LA MATRICE CORRELAZIONE GENERATA DAI DATI DEL MODELLO ESCLUSIVAMENTE PER LE CORRELAZIONI PIU' "LONTANE" DALLA DOMANDA IN ESAME.

