
function divisores(numero){
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

const divisoresV2 = function(numero){
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

const divisoresV3 = numero =>{
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

console.log("Total de  divisores", divisores(32));
console.log("Total de  divisores", divisoresV2(32));
console.log("Total de  divisores", divisoresV3(32));