import pandas as pd

#   Fichier avec données sur les relevès pluviométriques
src = "data/input/releve.csv"

#   Lecture de fichier "releve.csv"
data = pd.read_csv(src)

#   La somme des données 'data'
somme = pd.DataFrame.sum(data)

#   Dossier sortie des données récuperer dans "input"
src_ouptut = "data/output/releve.txt"

#   Ouverture du fichier de sortie et écriture de la somme des colonnes
with open(src_ouptut, 'w') as f:
    f.write(str(somme))