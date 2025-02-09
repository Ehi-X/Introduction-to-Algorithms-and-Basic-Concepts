const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function analyzeSentence(sentence) {
    let length = sentence.length;
    let words = 0;  
    let vowels = 0; 
    
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let inWord = false; 

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (vowelSet.has(char)) { 
            vowels++;
        }

        if (char === ' ') { 
            if (inWord) {
                words++;
                inWord = false;
            }
        } else if (char === '.') { 
            if (inWord) { 
                words++;
            }
        } else {
            inWord = true; 
        }
    }

    console.log("Length of the sentence:", length);
    console.log("Number of words:", words);
    console.log("Number of vowels:", vowels);
}

rl.question("Enter a sentence ending with a period: ", function(sentence) {
    analyzeSentence(sentence);
    rl.close();
});
