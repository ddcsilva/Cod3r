// Formas de Criar Objetos

// 1 - Criação Literal de Objetos
const objeto1 = {};
console.log(objeto1);

// 2 - Criação a partir de Object
const objeto2 = new Object();
console.log(objeto2);

// 3 - Criação através de Funções Construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    };
}

const produto1 = new Produto("Caneta", 7.99, 0.15);
const produto2 = new Produto("Notebook", 2998.99, 0.25);

console.log(produto1.getPrecoComDesconto());
console.log(produto2.getPrecoComDesconto());

// 3 - Criação através de Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        },
    };
}

const funcionario1 = criarFuncionario("João", 7980, 4);
const funcionario2 = criarFuncionario("Maria", 11400, 1);

console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());

// 4 - Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// 5 - Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
