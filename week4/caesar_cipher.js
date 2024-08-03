'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    
    let text = Array(s.length)
    let difference
    
    
    for(let i=0;i<s.length;i++){
        
        if((s.charCodeAt(i)< 97 || s.charCodeAt(i)> 122) &&
        (s.charCodeAt(i)< 65 || s.charCodeAt(i)> 90)){
            
            text[i] = s[i]
            continue
        }
        
        
        if(s[i] === s[i].toLowerCase()){
        
        if(s.charCodeAt(i)+ k >122){
            difference = (s.charCodeAt(i) +k) -123
            
            difference %= 26
            
    
            text[i] = String.fromCharCode(97+difference)
        
        }
    
        else{
        text[i] = String.fromCharCode(s.charCodeAt(i)+k)
        }
        }
        
        else{
            
              if(s.charCodeAt(i)+ k >90){
            difference = (s.charCodeAt(i) +k) -91
            
            difference %=26
            
            
            text[i] = String.fromCharCode(65+difference)
        
        }
    
        else{
        text[i] = String.fromCharCode(s.charCodeAt(i)+k)
        }
        
            
        }
        
        
        
        
        
        
        
    }
    
    
    
    

    
    return text.join('')
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
