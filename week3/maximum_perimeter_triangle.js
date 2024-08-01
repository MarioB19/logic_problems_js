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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    let ternas = Array()
    let aux = Array()
    let a=0, b=0,c=0
    
    
    let perimetros, terna, maxValor, indexesMax = Array()
    
    sticks = sticks.sort((a,b) => b-a)
    
 
    
    for(let i =0;i<sticks.length;i++){
        
        
        if(i+2 <sticks.length)
        {
            aux = sticks.slice(i,i+3)
        
            a= aux[0]
            b = aux[1]
            c = aux[2]
            
            if((a + b >c) && (c+ a > b) && (c + b > a)){
                ternas.push ([a,b,c])
            }
        }
    }
    
    perimetros = Array(ternas.length).fill(0)
    
    
    for(let i=0;i<ternas.length;i++){
        terna = ternas[i]
        perimetros[i] = terna[0] + terna[1] + terna[2]
    }
    
    
    
    
    maxValor = Math.max(...perimetros)
    
   
    
    for(let i =0;i<perimetros.length;i++){
        
        if(perimetros[i] === maxValor){
            indexesMax.push(i)
        }
    }
    
    
    if(indexesMax.length ===0){
        return [-1]
    }
    else {
        
        terna = ternas[indexesMax[0]]
        
        terna = terna.sort((a,b) => a-b)
        
        return  terna
    }
    
  
    
    

    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const sticks = readLine().replace(/\s+$/g, '').split(' ').map(sticksTemp => parseInt(sticksTemp, 10));

    const result = maximumPerimeterTriangle(sticks);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
