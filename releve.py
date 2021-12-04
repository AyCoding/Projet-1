import pandas as pd

src = "data/input/releve.csv"

data = pd.read_csv(src)

somme = pd.DataFrame.sum(data)

# print(somme)

src_ouptut = "data/output/releve.txt"
with open(src_ouptut, 'w') as f:
    f.write(str(somme))