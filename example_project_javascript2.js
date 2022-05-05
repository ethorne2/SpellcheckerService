/* Example project file using Javascript to show interaction */
let fs = require('fs');
let spellCheckedText = '';
let emptyString = '';


/* Write text to receive.txt */
function spellcheck_request(data){
    fs.writeFileSync('receive.txt', data);
};

function spellcheck_response() {
        let data = fs.readFileSync('response.txt', {encoding:'utf8', flag:'r'});
        spellCheckedText = data;
        console.log(data);
        return data;
};

function clear_response() {
    fs.truncateSync('response.txt', 0);
}

let data = 'Mizzpelled Words of the alfabet';
spellcheck_request(data);
spellCheckedText = spellcheck_response();
clear_response();
