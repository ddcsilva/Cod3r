/*
 * 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores
 */

function divisao(dividendo, divisor) {
    if (divisor <= 0) {
        console.log("Divisor inválido!");
        return;
    }

    const total = dividendo / divisor;
    const resto = dividendo % divisor;

    console.log(`Total: ${total} | Resto: ${resto}`);
}

divisao(4, 2);
divisao(4, 0);
