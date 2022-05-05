// Example project file using Javascript to show interaction
let fs = require('fs');
let spellCheckedText = '';

// Write text to receive.txt
function spellcheck_request(data){
    fs.writeFileSync('receive.txt', data);
};

function spellcheck_response() {
    // while loop - response is empty
    while (spellCheckedText === ''){
        let data = fs.readFileSync('response.txt', {encoding:'utf8', flag:'r'});
        spellCheckedText = data;
    }
    console.log(spellCheckedText);
    return data;
};

// fix so this runs after getting the response.
function clear_response() {
    fs.truncateSync('response.txt', 0);
}

// EXAMPLE USING SPELLCHECKER SERVICE
let data = 'Mizzpelled Words of the alfabet';
spellcheck_request(data);
spellCheckedText = spellcheck_response();
clear_response();