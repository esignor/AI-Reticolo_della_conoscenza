# SCRIPT R CHE HA COME OBIETTIVO TROVARE LA CORRELAZIONE ESISTENTE TRA LE DOMANDE DELLA RETE DI PROVA

# Caricamento della libreria
library("factoextra")
options(max.print=10000)
df_numeric<-read.table("/home/eleonora/Scrivania/AI-Reticolo_della_conoscenza/PCA/trainset dati/set-rete_di_prova.csv", header=FALSE, sep=",")  # carico il file csv
# calcolo il pca (centra automaticamente per avere la media a 0), non standardizzato
res.pca <- prcomp(df_numeric, scale = FALSE) 
biplot(res.pca); # rappresentazione grafica


# standardizzazione dei valori: MI E' UTILE PER IL CALCOLO DEGLI AUTOVETTORI
df_numeric_aux = df_numeric
for(i in 1:6){
  df_numeric_aux[,i]=(df_numeric[,i]-mean(df_numeric[,i]))/(sd(df_numeric[,i]))
}
res.pca=princomp(df_numeric_aux)
biplot(res.pca) # rappresentazione grafica dei risultati ottenuti dalla pca standardizzata


# riepilogo dei risultati (deviazione, proporzione della varianza, proporzione cumulata)
summary(res.pca)
# fornisce gli autovalori della matrice di covarianza/varianza delle dimensioni principali
get_eig(res.pca)

# calcolo la varianza per rappretare nel grafico l'andamento di tutte le 6 domande con tipo double
std_dex<-res.pca$sdev
#calcolo della varianza
pr_var<-std_dex^2
# proporzione della varianza spiegata da ciascun componente
prop_varex<-pr_var/sum(pr_var)
# facendo riferimento al campo "Proportion of Variance" le prime 3 componenti sono sufficienti per a descrivere i dati (spiegano ~98% della varianza)
# le variabili principali sono visibili anche graficamente (vedi seguenti due graici)
plot(cumsum(prop_varex), xlab="Principal Component", ylab="Cumulative Proportion of Variance Explained", type="b")
# ossevazione: le prime due componenti catturano buona parte della variabilita'
# Le ultime componenti principali descrivono solo rumore (spiegano una percentuale sempre minore della variabile principale)
# le prime tre componenti rappresentano una percentuale sufficientemente elevata, di conseguenza il grafico che si ottiene puo' essere 
# efficientemente utilizzato per interpretare i dati
# estrazione dei risultati per le variabili
fviz_screeplot(res.pca, addlabels =TRUE, barcolor = "darkblue", linecolor = "red", title = "Variances - PCA", x = "Principal Components", y = "% of variances") # equivale a plot(res.pca)

# autovettori
loadings(res.pca)
# Risulta come V1 (prima componente principale) e' vicino a V4, V2(seconda componente principale) a V5 e V3(terza componente principale) A V6


# contributo della variabile PC1
fviz_contrib(res.pca, choice = "var", axes = 1, top = 10)
# contributo della variabile PC2
fviz_contrib(res.pca, choice = "var", axes = 2, top = 10)
# contributo della variabile da PC1 a PC3
fviz_contrib(res.pca, choice = "var", axes = 1:3, top = 10)



# Grafico degli individui. Gli individui con un profilo simile sono raggruppati insieme. NON NECESSARIO PER LA MIA ANALISI
# fviz_pca_ind(res.pca,
#            col.ind = "cos2", # Color by the quality of representation
#             gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
#             repel = TRUE ,    # Avoid text overlapping
#)


# Grafico delle variabili. Le variabili correlate positive indicano lo stesso
# lato della trama. Le variabili correlate negative puntano ai lati opposti
# del grafico.
fviz_pca_var(res.pca,
             col.var = "contrib", # Color by contributions to the PC
             gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
             repel = TRUE 
)


# Trasposizione dei dati in ordine decrescente di correlazione per ciascuna domanda
cor.pca <- cor(df_numeric)
plot(cor.pca)
# Trasposizione dei dati in ordine decrescente di correlazione per ciascuna domanda
matrix <-matrix(nrow = 1, ncol = 6)
correlazione <- matrix(nrow = 6, ncol = 6)
for(r in 1:6){ 
  for(k in 1:6){
    matrix[k] = cor.pca[r,k]
  }
  for(i in 1:6){
    index  = which.max(matrix)
    correlazione[r, i] = index;
    matrix[index] = -1000
  }
}
# Correlazione copiata in matrice_correlazione-prova.csv"
write.table(correlazione, file="/home/eleonora/Scrivania/AI-Reticolo_della_conoscenza/PCA/trainset dati/matrice_correlazione-prova.csv", quote=T, sep=" ", dec=".", na="NA", row.name=T, col.names=T)


