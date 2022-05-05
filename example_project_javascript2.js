/* Example project file using Javascript to show interaction */
let fs = require('fs');
let spellCheckedText = '';
let emptyString = '';


/* Write text to receive.txt */
function spellcheck_request(data){
    fs.writeFileSync('receive.txt', data);
};

function spellcheck_response() {
    // make loop while response is empty
        let data = fs.readFileSync('response.txt', {encoding:'utf8', flag:'r'});
        spellCheckedText = data;
        console.log(data);
        return data;
};

// fix so this runs after getting the response.
function clear_response() {
    fs.truncateSync('response.txt', 0);
}

let data = 'Mizzpelled Words of the alfabet';
spellcheck_request(data);
spellCheckedText = spellcheck_response();
//clear_response();
