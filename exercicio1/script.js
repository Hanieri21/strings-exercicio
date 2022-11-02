/* const nome = prompt("Qual é o seu nome? ").toLowerCase()
const cor = prompt("Qual sua cor favorita? ").toLowerCase()

//concatenação + + + +
const frase = "A cor favorita do " + nome + " é " + cor

console.log(frase)

//template string `` (acento grave)
console.log(`a cor favorita do ${nome} é ${cor}`)

const citacao = prompt("escreva uma citação.")

//aspas dentro de aspas
const fraseCitacao = "\"" + citacao + "\""

console.log(fraseCitacao)

//template String com quebra de linha (\n)
console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

//letra maiuscula
console.log(`Nome: ${nome.toUpperCase()} \n Cor favorita: ${cor} `)

//contador de caracteres(.length) com template string
console.log(`Seu nome tem: ${nome.length} letras`)

//verificar se tem uma determinada letra no nome(.includes)
console.log(nome.includes('a'))


const nomeUsuario = prompt("Digite o seu nome:")
const emailUsuario = prompt("digite o seu email")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso! 
\n Seja bem vindo ${nomeUsuario}.`)

//trocando a letra 'r' por 'l'
const fraseUsuario = ("O email foi cadastrado com sucesso")
const fraseUsuarioAlterada = fraseUsuario.replace("r", "l")

console.log(fraseUsuarioAlterada)

//verificando se tem a letra '@' no nome
const verificaEmail = emailUsuario.includes("@")

console.log(emailUsuario.replace("r", "l"))
console.log(`seu email tem @? ${verificaEmail}`)

console.log(`seu nome tem: ${nome.length} letras`) */

//****************************************************//
/* # Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. 
Em seguida, Imprima no console a seguinte mensagem:    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3 */


const nomeDoUsuario = prompt("Digite o seu nome: ")
const comida1 = prompt("Digite uma comida favorita")
const comida2 = prompt("Digite uma segunda comida favorita")
const comida3 = prompt("Digite uma terceira comida favorita")

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}: \n ${comida1}, ${comida2} e ${comida3}`)
/* console.log(comida1)
console.log(comida2)
console.log(comida3) */