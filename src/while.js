import express from 'express'

const whileLoop = express.Router()

function contagemRegressiva(inicio) {
    let i = inicio
    const resultado = []

    while (i >= 0) {
        resultado.push(i)
        i--
    }

    return resultado
}

// params: /while/10
whileLoop.get('/:inicio', (req, res) => {
    const inicio = Number(req.params.inicio) || 10

    res.json({
        tipo: 'params',
        valorRecebido: inicio,
        resultado: contagemRegressiva(inicio)
    })
})

export { whileLoop }
