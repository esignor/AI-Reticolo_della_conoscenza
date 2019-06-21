# SCRIPT R CHE HA COME OBIETTIVO TROVARE LA CORRELAZIONE ESISTENTE TRA LE DOMANDE DELLA RETE DI PROVA

# Caricamento della libreria
library("factoextra")
options(max.print=10000)
df<-read.table("/home/eleonora/Scrivania/AI-Reticolo_della_conoscenza/PCA/trainset dati/set-rete_di_prova.csv", header=FALSE, sep=",")  # carico il file csv

# data.frame trasformato in una matrice numerica (per essere manipolata dal pca)
df_numeric<-data.frame(df)


# calcolo il pca (centra automaticamente per avere la media a 0), non standardizzato
res <- prcomp(df_numeric) 
biplot(res); # rappresentazione grafica

# standardizzazione dei valori
df_numeric_aux = df_numeric
for(i in 1:6){
  df_numeric_aux[,i]=(df_numeric[,i]-mean(df_numeric[,i]))/(sd(df_numeric[,i]))
}
res.pca=princomp(df_numeric_aux)
biplot(res.pca) # rappresentazione grafica dei risultati ottenuti dalla pca standardizzata

# fornisce gli autovalori della matrice di covarianza
summary(res.pca)
# facendo riferimento al campo "Proportion of Variance" le prime 3 componenti sono sufficienti per a descrivere i dati (spiegano ~98% della varianza)
# le variabili principali sono visibili anche graficamente
std_dex<-res.pca$sdev

#calcolo della varianza
pr_var<-std_dex^2

# proporzione della varianza spiegata da ciascun componente
prop_varex<-pr_var/sum(pr_var)
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



cor.pca <- cor(df_numeric)# matrice di correlazione
plot(cor.pca)
cor.pca

matrix <-matrix(nrow = 1, ncol = 6)
value <- matrix(nrow = 6, ncol = 6)
for(r in 1:6){ #passo le righe
  for(k in 1:6){
    matrix[k] = cor.pca[r,k]
  }
  matrix
  for(i in 1:6){
    index  = which.max(matrix)
    value[r, i] = index;
    matrix[index] = -1000
  }
}
value

fviz_pca_var(cor.pca,
             col.var = "contrib", # Color by contributions to the PC
             gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
             repel = TRUE     # Avoid text overlapping
)

res.pca
df_predict<-data.frame(V1=0, V2=0, V3=1, V4=0, V5=0, V6=0)
df_predict
res.predict = predict(res.pca, newdata = df_predict)
res.predict
