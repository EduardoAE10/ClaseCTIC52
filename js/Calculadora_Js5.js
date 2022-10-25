function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value; 
    let resultado = document.getElementById("resultado");

    if(operacion == '+'){
        resultado.value = numero1+numero2;
    }else if(operacion == "-"){
        resultado.value = numero1-numero2;
    }else if(operacion == "/"){
        resultado.value = numero1/numero2;
    }else if(operacion == "*"){
        resultado.value = numero1*numero2;
    }

}




function ImpTabla() {
    let numero = parseInt(document.getElementById("Tabla").value);
    let lista_tabla  = document.getElementById("tabla");
    let longitud = parseInt(document.getElementById("long").value);
    lista_tabla.innerHTML = "";
    for (let index = 1; index <= longitud; index++) {
        lista_tabla.innerHTML += `<li>${numero} x ${index} = ${numero * index}</li>`;
    }
}
