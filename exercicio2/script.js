const calcularTabuada = (numeroDigitado) => {
    const resultados = {}

    for (let i = 1; i <= 10; i++){
        resultados[`${numeroDigitado} x ${i}`] = numeroDigitado * i


    }

    return resultados
            
}

const numero = prompt('Digite um número:')
if(!isNaN(numero)){
    const numeroDigitado = parseFloat(numero)

    const resultados = calcularTabuada(numeroDigitado)

    for (const opecacao in resultados) {
        console.log(`${opecacao} = ${resultados[opecacao]}}`)

    }

}   else {
    console.log('Por favor, digite um numero valido')

}