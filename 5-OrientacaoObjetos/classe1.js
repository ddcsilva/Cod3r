class Lancamento {
    // É chamada por padrão quando é instanciada
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    adicionaLancamentos(...lancamentos) {
        lancamentos.forEach((lancamento) => this.lancamentos.push(lancamento));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach((l) => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento("Salário", 4500);
const contaDeLuz = new Lancamento("Luz", -220);

const contas = new CicloFinanceiro(6, 2018);
contas.adicionaLancamentos(salario, contaDeLuz);

console.log(contas.sumario());
