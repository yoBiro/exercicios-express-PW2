// Seção 9 - Laço de Repetição Do While

export function fibonacci(cont) {
    let a = 0;
    let b = 1;
    let i = 1;
        do {
            a = a+b;
            b = a-b;
            console.log(a);
            i++;
    } while (i <= cont);
}

// Seção 9.1 - Exemplo de Potência usando Do While

export function potencia(base, expoente) {
    let resultado = 1;
    let i = 1;
        do {
            resultado = resultado * base;
            i++;
        } while (i <= expoente);
    console.log(resultado);
}