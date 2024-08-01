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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function addingZero(s){
    return s.toString().padStart(2,'0')
}

function timeConversion(s) {
    
    let hours = Number(s.slice(0,2))
    let minutes = Number(s.slice(3,5))
    let seconds = Number(s.slice(6,8))
    const type = s.slice(8,10).toLowerCase()
    
    
    if(type == "am" ){
        
    if(hours=== -12){
        hours = 0
        minutes = 0
        seconds = 0        
    }
    else if(hours===12){
        hours -=12
    }
        
    }
    
    else{
        if(hours === -12){
            hours = 12
            minutes = 0
            seconds =0
        }
        else if(hours<12){
            hours +=12
        }
    }
    
    return (`${addingZero(hours)}:${addingZero(minutes)}:${addingZero(seconds)}`)
    
    
    
    
    
    
    
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
