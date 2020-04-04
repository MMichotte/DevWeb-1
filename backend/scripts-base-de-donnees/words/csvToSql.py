import csv

def convert(lang):
    f = open("sql/insert_words_"+lang+".sql", "w")
    f.write("INSERT INTO mots (languesId, mot)\nVALUES\n")
    f.close()

    with open("csv/"+lang+".csv") as f:
        csv_reader = csv.reader(f, delimiter=';')
        f = open("sql/insert_words_"+lang+".sql", "a")
        for row in csv_reader:
            word = row[1]
            if len(word) > 5:
                f.write(",\n('" + lang + "', '" + word + "')")
        f.write(";")
        f.close()
                
convert("en")
convert("fr")