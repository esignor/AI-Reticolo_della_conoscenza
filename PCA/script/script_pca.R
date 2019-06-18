library("factoextra")
df<-read.table("/home/eleonora/Scrivania/AI-Reticolo_della_conoscenza/PCA/TRAINSET/set-db.csv", header=FALSE, sep=",")  # carico il file csv
  df_numeric<-data.matrix(df, rownames.force=NA) # il fata.frame viene trasformato in una matrice numerica (per essere manipolata dal pca)
#df_trasp=t(df_numeric) # matrice traspsta: in ogni riga viene individuata la risposta alla domanda Vi per i test[0..1245]

#df_trasp <- df_trasp[,apply(df_trasp, 2, var, na.rm=TRUE) != 0]

  
# varianza di calcolo di ogni variabile, effettuo la standardizzazione delle variabili 
# (ovvero sulla medesima scala) quando  ho variabili su scale differenti da confrontare


res.pca <- prcomp(df_numeric, scale = TRUE) # calcolo il pca (centra automaticamente per avere la media a 0)

#summary PCA
summary(res.pca)

var <- get_pca_var(res.pca)
var
# vengono stampate coordinate delle variabili calcolate con la PCA
head(var$coord)
# visualizzo le prime righe

# Estrarre gli autovalori
get_eig(res.pca)

# Visualizza autovalori.
# Mostra la percentuale di varianze spiegata da ciascun componente principale (dispersione dei dati lungo ciascuna direzione)
fviz_screeplot(res.pca, addlabels =TRUE, ylim = c(0, 50)) # equivale a plot(res.pca)
# ossevazione: le prime due componenti catturano buona parte della variabilita'
# Le ultime componenti principali descrivono solo rumore (spiegano una percentuale sempre minore della variabile principale)
# le prime tre componenti rappresentano una percentuale sufficientemente elevata, di conseguenza il grafico che si ottiene puo' essere 
# efficientemente utilizzato per interpretare i dati
# estrazione dei risultati per le variabili

biplot(res.pca) # rappresentazione sintetica dei casi sul piano fattoriale

# Grafico degli individui. Gli individui con un profilo simile sono raggruppati insieme.
fviz_pca_ind(res.pca,
             col.ind = "cos2", # Color by the quality of representation
             gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
             repel = TRUE ,    # Avoid text overlapping
           )
# Grafico delle variabili. Le variabili correlate positive indicano lo stesso
# lato della trama. Le variabili correlate negative puntano ai lati opposti
# del grafico.
fviz_pca_var(res.pca,
             col.var = "contrib", # Color by contributions to the PC
             gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
             repel = TRUE     # Avoid text overlapping
             )
# contributo della variabile PC1
fviz_contrib(res.pca, choice = "var", axes = 1, top = 10)
# contributo della variabile PC2
fviz_contrib(res.pca, choice = "var", axes = 2, top = 10)

