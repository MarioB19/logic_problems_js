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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    
    let uniqueArray =  [...new Set(a)]
    uniqueArray = uniqueArray.sort((a,b) => a-b)
    let contUniqueArray = Array(uniqueArray.length).fill(0)
    let max = 0
    for(let i=0;i<a.length;i++){
        for(let j=0;j<uniqueArray.length;j++){
            
            if(a[i] === uniqueArray[j]){
                contUniqueArray[j]++
                break
            }
        }
    }
  
    for(let i =0;i<uniqueArray.length;i++){
        if(Math.abs(uniqueArray[i] - uniqueArray[i+1])<=1 ){
            if(max < contUniqueArray[i] +contUniqueArray[i+1])
              max = contUniqueArray[i] + contUniqueArray[i+1]
        } 
    }
    
    if(Math.max(...contUniqueArray) > max){
        return Math.max(...contUniqueArray)
    }
    
    return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
