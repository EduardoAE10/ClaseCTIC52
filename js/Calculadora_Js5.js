function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operacion = (document.getElementById("operacion").value);
    let resultado = document.getElementById("resultado");
    switch (operacion) {
        case "+":
            resultado.value = (num1+num2);
            break;
        case "-":
            resultado.value = (num1-num2);
            break;
        case "*":
            resultado.value = (num1*num2);
            break;
        case "/":
            resultado.value = (num1/num2);
            break;
        default:
            resultado.value = ("Coloque un signo");
            break;
    }
}