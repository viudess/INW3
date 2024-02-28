const prompt = require('prompt-sync')()

function getRadarInfo(){
    let velocidade = prompt("Digite a velocidade: ");

    return velocidade
    
}

function calcMulta(velocidadeDoVeiculo=0){
    return (velocidadeDoVeiculo - 60) * 100
}

function main(){
    let userData = getRadarInfo();
    let multa = calcMulta(userData)
    if(multa >= 100){
        console.log(`Sua multa vai ser de ${multa}R$`)
    } else {
        console.log(`Você não tem multa`)
    }
}

main()