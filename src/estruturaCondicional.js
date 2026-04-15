import express from 'express'

const ifComum = express.Router()

function verificarMundial(mundial) {
    if (mundial == 0) {
        return 'Seu time e fraco.'
    }

    return 'Voce nao torce para o time errado'
}

// query string: /src/estruturaCondicional?mundial=1
ifComum.get('/', (req, res) => {
    const mundial = Number(req.query.mundial) || 0

    res.json({
        tipo: 'query',
        valorRecebido: mundial,
        resultado: verificarMundial(mundial)
    })
})

export { ifComum }
