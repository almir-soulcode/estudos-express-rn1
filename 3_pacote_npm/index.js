const CPF = require("cpf");

console.log(CPF.generate());
console.log(CPF.format("11111111111"));
console.log(CPF.isValid("11111111111"));

/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */
