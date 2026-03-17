import express from 'express'

export function whileLoop(res, req) {
    function contagemRegressiva(res, req) {
        let i = 10;
        while (i >= 0) {
            console.log(i);
            res.send(i);
            i--;
        }
    }
    
        // Seção 8.1 - Laço de Repetição While 2
    
    function somaAteCem(res, req) {
        let i = 1;
        let soma = 0;
        while (i <= 100) {
            soma += i;
            i++;
        }
        console.log(soma);
        res.send(soma);
    }
}
