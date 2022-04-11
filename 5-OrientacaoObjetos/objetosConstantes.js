// pessoa -> 123 -> {...}
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: "Ana" }; -> Erro

Object.freeze(pessoa);
pessoa.nome = "Maria";

pessoa.endereco = "Rua 123";
console.log(pessoa.endereco);

delete pessoa.nome;
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({ nome: "João" });
