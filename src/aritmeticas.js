// Seçao 3 - Operações Aritméticas

export function operacoesBasicas(numeroUm, numeroDois) {

    const soma = numeroDois + numeroUm;
    const subtracao = numeroDois - numeroUm;
    const multiplicacao = numeroDois * numeroUm;
    const divisao = numeroDois / numeroUm;

    console.log("Soma: " + soma)
    console.log("Subtração: " + subtracao)
    console.log("Multiplicação: " + multiplicacao)
    console.log("Divisão: " + divisao)
}

// Seção 3.1 - Operações Avançadas

export function operacoesAvancadas(numeroUm, numeroDois) {
    const potencia = numeroUm ** numeroDois;
    const resto = numeroUm % numeroDois;
    const raiz = Math.sqrt(numeroDois);

    console.log("Potência: " + potencia)
    console.log("Resto: " + resto)
    console.log("Raiz: " + raiz)
}