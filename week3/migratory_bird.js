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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    
    arr = arr.sort((a,b) => a-b)
    
    const uniqueArr = [1,2,3,4,5]
    
    let contBirds = Array(5).fill(0)
    let number = 0
    
    for(let i=0;i<arr.length;i++){
        
        for(let j=0;j<5;j++){
            
            if(arr[i]=== uniqueArr[j]){
                contBirds[j]++
            }
        }
    }
    
    number = Math.max(...contBirds)
    
   
    
    return (contBirds.findIndex(x => x == number))+ 1
    
    
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
