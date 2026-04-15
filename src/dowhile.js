import express from 'express'

const fibonacci = express.Router()

function calcularFibonacci(cont = 5) {
    let a = 0
    let b = 1
    let i = 1
    const resultado = []

    do {
        a = a + b
        b = a - b
        resultado.push(a)
        i++
    } while (i <= cont)

    return resultado
}

// params: /dowhile/6
fibonacci.get('/:cont', (req, res) => {
    const cont = Number(req.params.cont) || 5

    res.json({
        tipo: 'params',
        valorRecebido: cont,
        resultado: calcularFibonacci(cont)
    })
})

export { fibonacci }
