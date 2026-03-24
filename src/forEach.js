import express from 'express'

export function forEach(req, res) {
    function pessoas() {   
        let pessoas = ['João', 'Maria', 'Pedro', 'Ana'];
        pessoas.forEach(pessoa => {
            console.log(pessoa);
            res.send(pessoas);
        });
    }
    pessoas();
}