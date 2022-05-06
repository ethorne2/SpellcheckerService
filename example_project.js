// Example project file using Javascript to show interaction
let fs = require('fs');
let text_spellchecked = '';

// Write text to receive.txt
function spellcheck_request(data){
    fs.writeFileSync('receive.txt', data);
};

function spellcheck_response() {
    // while loop - response is empty
    while (text_spellchecked === ''){
        let data = fs.readFileSync('response.txt', {encoding:'utf8', flag:'r'});
        text_spellchecked = data;
    }
    fs.truncateSync('response.txt', 0);
    return text_spellchecked;
};

// EXAMPLE USING SPELLCHECKER SERVICE
let data = 'Mizzpelled Words of the Alfabet';
spellcheck_request(data);
// In example, the text_spellchecked = “Misspelled Words of the Alphabet”
text_spellchecked = spellcheck_response();
console.log(text_spellchecked);