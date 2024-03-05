/**
* EXERCÍCIO aula Variáveis 
Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas. 
*/

// Declarar uma variável com o seu nome
var meuNome = 'Gabriel'
// Declarar uma variável com a sua idade
var minhaIdade = 31
// Declarar uma variável com a sua comida
var comida = 'Lasanha'
// favorita e não atribuir valor
var favorita
// Atribuir valor a sua comida favorita
favorita = comida
// Declarar 5 variáveis diferentes sem valores
var carro, filhos, moto, casa, lugar

/**
 * EXERCÍCIO aula Tipos de dados
Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas. 
 */

// Declare uma variável contendo uma string
var variavelString = 'Aui é uma string'
// Declare uma variável contendo um número dentro de uma string
var numeroEmString = 'Essa é uma string mostrando um numero: 10'
// Declare uma variável com a sua idade
var minhaIdade = 31
// Declare duas variáveis, uma com seu nome
var nome = 'Gabriel'
// e outra com seu sobrenome e some as mesmas
var sobrenome = 'Azevedo'
nome + sobrenome
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time"
// Verifique o tipo da variável que contém o seu nome
var tipoVariavel = (typeof nome)
console.log(tipoVariavel)

/**
 * Exercício aula Números e operadores
 */

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// Crie duas expressões que retornem NaN
var retorarNaN = total / 'total ' //Not a Number => não é um número
console.log(retorarNaN)
// Somar a string '200' com o número 50 e retornar 250
console.log('200'+50)
// Incremente o número 5 e retorne o seu valor incrementado
var numeroIncrementado = 5
console.log(`Variavel com valor ${numeroIncrementado}, e esse é seu valor com incremento ${++numeroIncrementado}`)
// Como dividir o peso por 2?
var numero = parseInt('80');
var unidade = 'kg';
var pesoPorDois = numero / 2; // NaN (Not a Number)
var peso = pesoPorDois + unidade; // '80kg'
console.log(peso)

/**
 * Exercícios aula Boolean e Condicionais 
 */

// Verifique se a sua idade é maior do que a de algum parente
var idadeParente = 50
console.log("Minha idade é maior?", minhaIdade == idadeParente)
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if(minhaIdade >= idadeParente){console.log('É maior')}else{console.log('É menor')}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log('expressao', expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; // Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // False

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // Cão


/**
 * Exercício aula Funções
 */

// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor){
  return valor ? console.log('Truthy') :  console.log('Falsy')
}
verificaTruthy('') // Falsy
verificaTruthy('_') //Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return 4 * lado
}
console.log(perimetroQuadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome, terceiroNome ='', ultimoNome=''){
  return `${nome} ${sobrenome} ${terceiroNome} ${ultimoNome}`
}
console.log(nomeCompleto('Gabriel', 'Azevedo', 'Oliveira', 'Silva'))

// Crie uma função que verifica se um número é par

function verificaEhPar(num){
  if(num % 2 !== 0){
    return 'É impar'
  } 
    return 'É par'   
}
console.log(verificaEhPar(23))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoValor(valor){
  return typeof valor
}
console.log(tipoValor(123 / 'as'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function ocorreuScrool(){
  return console.log('Scroooolll')
}
window.addEventListener('scroll', ocorreuScrool)


// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
