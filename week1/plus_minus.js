'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let typeCont = [0, 0, 0]; // [positives, negatives, zeros]
    
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            typeCont[0]++;
        } else if (arr[index] < 0) {
            typeCont[1]++;
        } else {
            typeCont[2]++;
        }
    }

    const total = arr.length;
    console.log((typeCont[0] / total).toFixed(6));
    console.log((typeCont[1] / total).toFixed(6));
    console.log((typeCont[2] / total).toFixed(6));
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
