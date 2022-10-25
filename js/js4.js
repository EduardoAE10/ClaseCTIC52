
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


function cambiarimg() {
    let opcion = parseInt(document.getElementById("opcion").value);   
    let base = document.getElementById("imagen"); 
    switch (opcion) {
        case 1:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg";
            break;
        case 2:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg";
            break;
        case 3:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bra-Cos_%281%29_%28cropped%29.jpg/640px-Bra-Cos_%281%29_%28cropped%29.jpg";
            break;
        case 4:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/FC_RB_Salzburg_versus_Real_Madrid_%28Testspiel%2C_7._August_2019%29_38.jpg/250px-FC_RB_Salzburg_versus_Real_Madrid_%28Testspiel%2C_7._August_2019%29_38.jpg";
            break;
        default:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/6/66/Sin_datos.jpg"
            break;

    }
    
}