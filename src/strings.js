import express from 'express'

export function strings(req, res) {
    // Seção 2 - Concatenando Strings
    function exercicioUm() {
        const saudacao = "Oi, ";
        const pessoa = "Vida, saudades";
        console.log(saudacao + pessoa)
        res.send(saudacao + pessoa);
    }
    
    // Seção 2.1 - Concatenação 2
    
    function exercicioDois() {
        const alimento = "Maçã";
        const situacao = " está suja.";
        const result = alimento.concat(situacao)
        console.log(result)
        res.send(result);
    }
    exercicioUm();
    exercicioDois();
}
