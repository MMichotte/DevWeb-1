import csv

def convert(lang):
    f = open("sql/insert_words_"+lang+".sql", "w")
    f.write("INSERT INTO mots (languesId, mot)\nVALUES\n")
    f.close()

    with open("csv/"+lang+".csv") as f:
        csv_reader = csv.reader(f, delimiter=';')
        f = open("sql/insert_words_"+lang+".sql", "a")
        count = 0
        words = []
        for row in csv_reader:
            word = row[1].lower()
            flag = True
            for w in words :
                if w == word :
                    flag = False
                    break
            
            if len(word) > 5 and not ("ï¿½" in word) and flag :
                if count == 0 :
                    f.write("('" + lang + "', '" + word + "')")
                else :
                    f.write(",\n('" + lang + "', '" + word + "')")
                words.append(word)
                count += 1
        f.write(";")
        f.close()
                
#convert("en")
#convert("fr")
convert("de")