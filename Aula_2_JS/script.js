//Atividade 01: Peça ao usuário para inserir um número e escreva um programa que determine se o número é positivo e par.

const numero = Number(prompt("Digite um numero: "))

if (numero > 0 && numero % 2 === 0 ){
    console.log("O número é positivo e par");
}
else {
    console.log("O número é negativo e impar");
}

//Atividade 02: Crie um programa que solicite ao usuário seu peso (em kg) e altura (em metros) e calcule o IMC. Em seguida, informe a categoria de acordo com a tabela de IMC (por exemplo, abaixo do peso, peso normal, sobrepeso, etc.).

const peso = Number(prompt("Digite seu peso em kilos: "))
const altura = Number(prompt("Digite seu altura em metros: "))

const imc = peso / (altura*altura)

if (imc <= 16){
    console.log("Magreza grave");
}
else if (imc >= 16 & imc < 16.9){
    console.log("Magreza moderada");
}
else if (imc >= 17 & imc < 18.5){
    console.log("Magreza leve");
}
else if (imc >= 18.6 & imc < 24.9){
    console.log("Peso ideal");
}
else if (imc >= 25 & imc < 29.9){
    console.log("Sobrepeso");
}
else if (imc >= 30 & imc < 34.9){
    console.log("Obesidade grau |");
} 
else if (imc >= 35 && imc < 39.9) {
    console.log("Obesidade grau II (severa)");
} 
else {
    console.log("Obesidade grau III (mórbida)");    
}

//Atividade 03: Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

const precoProduto = Number(prompt("Digite o preço do produto: "))
const idadeusuario = Number(prompt("Digite a sua idade : "))

let precoFinal
if (idadeusuario < 18) {
    precoFinal = precoProduto * 0.9
}
else{
    precoFinal = precoProduto
}

console.log(`O preço final do produto foi de R$: ${precoFinal .toFixed(2)}`);

//Atividade 04: Solicite ao usuário que digite uma letra. Crie um programa que determine se a letra inserida é uma vogal ou uma consoante. Exiba a mensagem correspondente. Utilize estruturas condicionais para realizar essa verificação.

const letra = prompt("Digite uma letra: ")

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra ==="u"){
    console.log("É vogal");
}
else{
    console.log("É consoante");
}

//Atividade 05: Crie um programa que solicite um número de 1 a 7, representando o dia da semana. Use uma estrutura switch (ou equivalente) para imprimir o nome do dia correspondente.

const numeroDia = Number(prompt("Digite um número de 1 a 7 representando o dia da semana:"))

let nomeDia

switch (numeroDia) {
    case 1:
        nomeDia = "Domingo"
        break
    case 2:
        nomeDia = "Segunda-feira"
        break
    case 3:
        nomeDia = "Terça-feira"
        break
    case 4:
        nomeDia = "Quarta-feira"
        break
    case 5:
        nomeDia = "Quinta-feira"
        break
    case 6:
        nomeDia = "Sexta-feira"
        break
    case 7:
        nomeDia = "Sábado"
        break
    default:
        nomeDia = "Número inválido"
}

console.log(`O dia correpondente é: ${nomeDia}`)


