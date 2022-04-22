// Um array em JS é um Objeto
console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo"; // Comum pra substituir um elemento
aprovados.push("Danilo"); // Indicado para adicionar um elemento
console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);

console.log(aprovados);
aprovados.sort(); // Realiza a alteração dentro do array atual
console.log(aprovados);

delete aprovados[1]; // Remove o valor da posição 1
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1); // Remove a partir da posição informada
console.log(aprovados);

aprovados.splice(1, 0, "Element1", " Elemento2"); // Adiciona
console.log(aprovados);
