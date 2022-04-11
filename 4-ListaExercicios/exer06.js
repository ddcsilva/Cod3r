/*
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

function calculaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let juros = capitalInicial * taxaJuros * tempoAplicacao;
    let montante = capitalInicial + juros;
    console.log(montante);
}

function calculaJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    montante = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao);
    console.log(montante.toFixed(2));
}

calculaJurosSimples(1200, 0.02, 14);
calculaJurosCompostos(620, 0.015, 24);
