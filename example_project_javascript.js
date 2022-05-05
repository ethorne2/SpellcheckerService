/* Example project file using Javascript to show interaction */

let fs = require('fs');

function spellcheck_request(data) {
    fs.writeFile('receive.txt', data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File written successfully\n");
        }
    });
};

function spellcheck_response() {
    let content = ''; /* set content to an empty string to start while loop */
    while(content === ''){
        fs.readFile('response.txt', function(err, data){
            if (err) {
                console.log(err);
            }
            content = data.toString();
        });
    };
    /* after content is set, write empty strign to response.txt for next spell check */
    fs.writeFile('response.txt', '', (err) => {
        if (err){
            console.log(err);
        }
        else {
            console.log("File written successfully\n");
        };
    });

    return content;
};

let example_text = 'Here iz sampel text with mizpelled wordz';
/* To execute function */
spellcheck_request(example_text);
/* in this example, the text_spellchecked = “Here is sample text with misspelled words" */
let text_spellchecked = spellcheck_response();
console.log(text_spellchecked);