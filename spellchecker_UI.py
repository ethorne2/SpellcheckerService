# Author: Elizabeth Thorne
# Info: Spellchecker UI
from autocorrect import Speller
check = Speller(lang='en')

while True:
    f = open('receive.txt', 'r')
    read_data = f.read()

    # check if line in file is not empty
    if read_data != "":
        # spell check read_data
        spellchecked_text = check(read_data)
        f.close()

        # write spellchecked text into response.txt
        f = open('response.txt', 'w')
        f.write(spellchecked_text)
        f.close()
        
        # clear receive.txt
        f = open('receive.txt', 'w')
        f.write('')

    f.close()
