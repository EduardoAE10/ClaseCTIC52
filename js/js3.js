

let hora = 5;
let frecuencia = 6;

let tomas = 24 / frecuencia;

console.log("Horarios");

let horario = hora;

for (let i = 1;i <= tomas; i++) {
    console.log(`Toma: ` + i + "  " + (horario) + ":00 hrs");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
};