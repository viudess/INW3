const prompt = require('prompt-sync')()

function getUserInfo(){
    let peso = prompt("Digite seu peso: ")
    let altura = prompt("Digite sua altura: ")

    return {
        pesoDoUsuario: peso,
        alturaDoUsuario: altura
    }
}

function calcIMC(pesoDoUsuario=0, alturaDoUsuario=0){
    return pesoDoUsuario/alturaDoUsuario**2
}

function main(){
    let userData = getUserInfo();
    let peso = userData.pesoDoUsuario
    let altura = userData.alturaDoUsuario
    let resultado = calcIMC(peso,altura)
    if(resultado < 18){
        console.log(`Seu IMC é ${resultado}, e você está abaixo do peso`)
    } else if(resultado > 18 && resultado < 23.9){
            console.log(`Seu IMC é ${resultado}, e você está normal`)
        }
}

main()