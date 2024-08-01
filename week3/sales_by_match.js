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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    
    let uniqueArray = [...new Set(ar)]
    
    uniqueArray = uniqueArray.sort((a,b) => a-b)
    
    let contArray = Array(uniqueArray.length).fill(0)
    
    let contGlobal = 0
    
    
   
   
    for(let i =0;i<ar.length;i++){
        
        for(let j=0;j<uniqueArray.length;j++){
            
            if(ar[i]=== uniqueArray[j]){
    
                contArray[j]++
            }
        }
    }
    
    for(let i =0;i<contArray.length;i++){
        
        contGlobal += Math.trunc(contArray[i]/2)
        
    }
    
    return contGlobal
    
    
    
  

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
