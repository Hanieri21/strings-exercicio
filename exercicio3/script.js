/* # Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não 
deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */


const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair"
const fraseComAspas = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const fraseCor = fraseComAspas.replace("verde", "rosa",).replace("azul", "laranja")
const fraseVerifica = fraseCor.includes("verde", "laranja")
const fraseMaiuscula = fraseCor.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(`Frase inicial: \n R- ${frase}`)
console.log(`Frase com aspas: \n R- ${fraseComAspas}`)
console.log(`Trocando verde/rosa e azul/laranja: \n R- ${fraseCor}`)
console.log(`A frase tem as palavras "verde" e "laranja"? \n R- ${fraseVerifica}`)
console.log(`Alterando parte do texto para caixa alta: \n R- ${fraseMaiuscula}`)