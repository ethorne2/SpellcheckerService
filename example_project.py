# Example project file using python to show interaction

def spellcheck_request(text):
    with open ('receive.txt', 'w') as f:
        f.write(text)

def spellcheck_response():
    content = ''  # set content to an empty string to start while loop
    while content == '':
        with open('response.txt') as f:
            content = f.read()

    # after content is set, write an empty string to the response.txt for next spell check
    with open ('response.txt', 'w') as f:
                   f.write('')
    return content

# EXAMPLE USING SPELLCHECKER SERVICE
example_text = 'Mizzpelled Words of the Alfabet'
spellcheck_request(example_text)  # to execute the function
text_spellchecked = spellcheck_response()
# In example, the text_spellchecked = “Misspelled Words of the Alphabet”
print(text_spellchecked)