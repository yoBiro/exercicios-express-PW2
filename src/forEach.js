import express from 'express'

export function forEach(res, req) {
    function pessoas() {   
        let pessoas = ['João', 'Maria', 'Pedro', 'Ana'];
        pessoas.forEach(pessoa => {
            console.log(pessoa);
            res.send(pessoa);
        });
    }
    pessoas();
}