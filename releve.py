import pandas as pd

#   Dossier sortie des données récuperer dans "input"
src_ouptut = "data/output/"


YEAR = ["2015","2016","2017","2018"]

for annee in YEAR:
    src = f"data/input/releve{annee}.csv"

    data = pd.read_csv(src)
    df = pd.DataFrame(data)

    # data_set = df.to_json(f"{src_ouptut}revele{annee}.json")

    data_set = df.to_json(orient='records')
    # print(data_set)

    with open(f"{src_ouptut}revele{annee}.json", 'w') as f:
        f.write(data_set)