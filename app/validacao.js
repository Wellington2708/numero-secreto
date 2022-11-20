function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido</div>`
        return
    }

    if(NumeroForMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML +=  `
        <div> Valor inválido. Fale um número entre ${menorValor} e ${maiorValor} </div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você Acertou!! </h2>
        <h3> O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-regular fa-arrow-up-long"></i>
        
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-regular fa-arrow-up-long"></i>
        `
    
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function NumeroForMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click' , e =>  {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})