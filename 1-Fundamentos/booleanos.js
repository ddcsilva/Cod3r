let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // Dupla negação para mostrar se o valor é false ou true
console.log();

console.log('VERDADEIROS');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log();

console.log('FALSOS');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log();

console.log('OUTRO EXEMPLO COM SENTENÇA LÓGICA');
console.log(!!('' || null || 0 || ' '))
console.log();

let nome = '';
console.log(nome || 'Desconhecido');
nome = 'Lucas';
console.log(nome || 'Desconhecido');