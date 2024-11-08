//exercicio-1

const prompt = require ('prompt-sync')();

let cadastroAluno = [];
let continuar ;

do {
let nome = prompt ("Digite seu nome: ");
let idade = prompt ("Digite sua idade: ");

cadastroAluno.push ({nome: nome, idade: idade });
continuar = prompt ("Deseja cadastrar novo aluno? (s/n):");

}while (continuar.toLowerCase() === "s");

console.log("Alunos cadastrados!", cadastroAluno);


//exercicio-2

const prompt1 = require('prompt-sync')

let notageral = []
let continuar1;

do {

    let nota1 = parseFloat(prompt('digite primeira nota: '))
    let nota2 = parseFloat(prompt('digite segunda nota: '))
    let nota3 = parseFloat(prompt('digite terceira nota: '))
    let media = (nota1 + nota2 + nota3) / 3;

    console.log(media);

    notageral.push({ Nota1: nota1, Nota2: nota2, Nota3: nota3 });
    notageral.push({ media })

    continuar1 = prompt('Deseja adicionar mais uma nota ? (s/n): ')

} while (continuar1.toLowerCase() === 's')


//exercicio-3

const prompt2 = require('prompt-sync')();

let usuario1 = "thiago.hunas@gmail.com";
let senha1 = "123456";
let login = [];
let continuar2;
let continuação;

do {
    let usuario = prompt('Digite seu usuario:');
    let senha = prompt('Digite sua senha:');

    if (usuario === usuario1 && senha === senha1){
        console.log("Login realizado");
    break;
    }else {
        console.log("Login mal sucedido");
    }

    continuar2 = prompt2("Tente novamente! (s/n):");
    continuação = prompt2("sair? (s/n):");

}while(continuar2.toLocaleLowerCase() === 's');


//exercicio-5

const prompt3 = require('prompt-sync')();  
let continuar3;

do {
    let pin = prompt3('Digite uma senha (mínimo de 8 caracteres, com letras e números): ');

    continuar3 = !(pin.length >= 8 && /[A-Za-z]/.test(pin) && /[0-9]/.test(pin));
    console.log(continuar3 ? 'Senha inválida animal! A senha deve ter pelo menos 8 caracteres, conter letras e números.' : 'Senha válida! Acesso permitido.');

} while (continuar3);


//exercicio-6

const prompt4 = require('prompt-sync')();  

let continuar4;

do {
    let nota4 = parseFloat(prompt4('Digite a primeira nota: '));
    let nota5 = parseFloat(prompt4('Digite a segunda nota: '));
    let nota6 = parseFloat(prompt4('Digite a terceira nota: '));
    let nota7 = parseFloat(prompt4('Digite a quarta nota: '));

    let media = (nota4 + nota5 + nota6 + nota7) /4;  
    
    console.log('A média das notas é:', media); 

    continuar4 = prompt4('Deseja adicionar mais notas? (s/n): ');

} while (continuar4.toLowerCase() === 's'); 


//exercicio-8

const prompt6 = require('prompt-sync')();

let continuar5;

do {
    let nome5 = prompt6('Digite o seu nome: ');
    let idade = parseInt(prompt6('Digite sua idade lindão/lindona: '));

    if (idade < 6 || idade > 100) {
        console.log("Idade inválida! Amigão/amigona, coloque uma idade válida");
        continuar5 = prompt6('Deseja tentar novamente? (s/n): ');
    } else {
        console.log(`Fala, ${nome5}! Você tem ${idade} anos.`); 
        continuar5 = 'n'; 
    }

} while (continuar5.toLocaleLowerCase() === 's'); 


//exercicio-9

const prompt7 = require('prompt-sync')();

let computador = 10;
let mouse =77;
let teclado = 50;
let hdmi = 20;
let estoqueMinimo = 10;
let continuar6;

do {
   let estoque = parseInt(prompt7('Quantos produtos você tem em estoque? '));
   let nomeDoProduto = prompt7('Qual é o nome do produto? ');

   if (nomeDoProduto === 'Computador') {
    console.log(estoqueMinimo,"Preencha o estoque de computador");



}while(continuar6.toLocaleLowerCase() === 's');








