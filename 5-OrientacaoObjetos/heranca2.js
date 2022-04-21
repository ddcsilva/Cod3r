// Cadeia de propótipos (prototype chain)
Object.prototype.atributo0 = "0"; // Não recomendável
const avo = { atributo1: "A" };
const pai = { __proto__: avo, atributo2: "B" };
const filho = { __proto__: pai, atributo3: "C" };

console.log(filho.atributo0);
console.log(filho.atributo1);
console.log(filho.atributo2);
console.log(filho.atributo3);

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta;
        } else {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },
    status() {
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`;
    },
};

const ferrari = {
    modelo: "F40",
    velocidadeMaxima: 324, // Shadowing
};

const volvo = {
    modelo: "F40",
    status() {
        return `${this.modelo}: ${super.status()}`;
    },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);

console.log(volvo.status());

ferrari.acelerarMais(300);

console.log(ferrari.status());
