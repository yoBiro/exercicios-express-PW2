import express from 'express'

const array3 = express.Router()

// query string: /array?carro=Bugatti
array3.get('/', (req, res) => {
    const { carro = '' } = req.query

    res.json({
        tipo: 'query',
        valorRecebido: carro,
        resultado: adicionarCarro(carro)
    })
})

export { array3 }
