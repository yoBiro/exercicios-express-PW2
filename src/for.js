import express from 'express'

const tabuada = express.Router()

function montarTabuada(numero) {

    for (let j = 1; j <= 10; j++) {
        for (let i = 0; i <= 10; i++) {
            const resultado = `${numero} x ${i} = ${numero * i}`
        }
    }

    return resultado
}

tabuada.get('/', (req, res) => {
    const numero = Number(req.query.numero) || 1

    res.json({
        tipo: 'query',
        valorRecebido: numero,
        resultado: montarTabuada(numero)
    })
})

export { tabuada }
