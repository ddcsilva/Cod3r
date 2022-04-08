/*
 * 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */

function classificarTriangulo(ladoA, ladoB, ladoC) {
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        console.log("Valor informado incorreto!");
        return;
    }

    if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
        console.log("Triângulo Equilátero");
    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        console.log("Triângulo Escaleno");
    } else {
        console.log("Triângulo Isósceles");
    }
}

classificarTriangulo(1, "2", 4);
