import express from 'express'

const strings = express.Router()

function montarMensagem(nome = 'Vida, saudades') {
    const saudacao = 'Oi, '

    return saudacao + nome
}

// params: /strings/Gabriel
strings.get('/:nome', (req, res) => {
    const { nome } = req.params

    res.json({
        tipo: 'params',
        valorRecebido: nome,
        resultado: montarMensagem(nome)
    })
})

export { strings }
