/*Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/
 
let n1 = prompt("digite o valor 1")
let n2 = prompt("digite o valor 2")
if (n1 === n2) {
 alert("numeros iguais")
}
if (n1 > n2) {
 alert("primeiro valor é maior ")
}
if(n1<n2){alert("segundo valor e maior")}
