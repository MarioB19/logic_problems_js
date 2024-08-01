
function proccesSplit(type, input){
    
    let word = ''
    
    if(type === "M"){ //method
    
       input = input.slice(0,-2)
        
        
        for(let i =0;i<input.length;i++){
            
            if(input[i] === input[i].toUpperCase()){
                word += " " + input[i].toLowerCase() 
                
            }else{
                word += input[i].toLowerCase()   
            }
        }
    }
    else{ //variable y metodo
    
       for(let i =0;i<input.length;i++){
            
            if(input[i] === input[i].toUpperCase()){
                word += " "+ input[i].toLowerCase() 
                
            }else{
                word += input[i].toLowerCase()   
            }
        }
        
    }
    

    
    return word.trimLeft().trimRight()
    
}

function proccessCombine(type, input){
    
    let word = ''
    
    if(type === "M"){
        
    for(let i=0;i<input.length;i++){
        
        if(input[i] === " "){
            continue
        }
        
        if(input[i-1] === " "){
            word += input[i].toUpperCase()
        }
        else{
            word += input[i].toLowerCase()
        }
    }
    
    word += "()"
        
    }
    else {
           for(let i=0;i<input.length;i++){
               
                 
        if(input[i] === " "){
            continue
        }
        
               
        
        if(i ===0 && type === "C"){
            word += input[i].toUpperCase()
        }
        else if(input[i-1] === " "){
            word += input[i].toUpperCase()
        }
        else{
            word += input[i].toLowerCase()
        }
    }
    
        
    }
        

    
    return word
    
}
function processData(input) {
    
    let wordsAux = input.split("\n")
    
    let words =  Array(wordsAux.length).fill("")
    
    
    for(let i =0;i<wordsAux.length;i++){
        
       for(let j=0;j<wordsAux[i].length;j++){
           
           if(wordsAux[i][j] !== '\r'  ){
           words[i] += wordsAux[i][j]
           }
       }
    }
    
    let operation = ''
    let type = ''
    let text = ''
    let result = ''
    
    for(let i =0;i<words.length;i++){
        
        operation = words[i].slice(0,1)
        type = words[i].slice(2,3)
        text = words[i].slice(4)
        
        
        
        
        if(operation === "S"){
            
            result = proccesSplit(type,text)
        }
        else{
            result = proccessCombine(type,text).trim()
        }
        
         console.log(result)
         
        
    }
        
    
    return words
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
