import pandas as pd
import json

#   Dossier sortie des données récuperer dans "input"
src_ouptut = "data/output/"


YEAR = ["2015","2016","2017","2018"]

#   annee = 0 / 2015 | annee = 3 / 2018 |
for annee in YEAR:
    src = f"data/input/releve{annee}.csv"

    # Lecture des fichiers dans un DataFrame
    df = pd.read_csv(src)

    # Conversion du CSV en JSON
    data_set = df.to_json(orient='index')
    test = json.dumps(data_set)
    print(test)

    # Ecriture des fichiers avec les données converti en JSON dans /data/output/...csv
    with open(f"{src_ouptut}revele{annee}.json", 'w') as f:
        f.write(data_set)
