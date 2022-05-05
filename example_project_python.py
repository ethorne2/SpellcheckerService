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

example_text = 'Mizzpelled Words of the alfabet'
spellcheck_request(example_text)  # to execute the function
text_spellchecked = spellcheck_response()
# in this example, the text_spellchecked = “Here is sample text with misspelled words”
print(text_spellchecked)