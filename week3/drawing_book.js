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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    
    
    const numberTotalPages =( Math.trunc((n-2) /2)) +2
    
    const numberOfPageSearch = Math.trunc((p-2) /2) +2
    
    
    if(numberOfPageSearch === numberTotalPages){
        return 0
    }
    
    if(numberOfPageSearch === 1){
        return 0
    }
    
    if(p === 1){
        return 0
    }
    
  
  

    
    if(numberTotalPages-numberOfPageSearch < numberOfPageSearch){
        return numberTotalPages-numberOfPageSearch 
    }
    else{ 
        return numberOfPageSearch-1
    }
    
    
    
    
    
    
    

    

    

    
    
    
    
    
    
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
