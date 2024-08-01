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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    
    let subCadena= ''
    
    let contCaractersChanged = 0
    

    for(let i=0;i<s.length;i +=3){
        
        subCadena = s.slice(i,i+4)
        
        
        if(subCadena[0] != "S"){
            contCaractersChanged++
        }
        
         if(subCadena[1] != "O"){
            contCaractersChanged++
        }
         if(subCadena[2] != "S"){
            contCaractersChanged++
        }
        
        
        
        
    }
    return contCaractersChanged

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
