import express from 'express'

const forEach = express.Router()

function listarPessoas(nomeExtra = '') {
    const pessoas = ['Joao', 'Maria', 'Pedro', 'Ana']

    if (nomeExtra) {
        pessoas.push(nomeExtra)
    }

    const resultado = []

    pessoas.forEach((pessoa) => {
        resultado.push(pessoa)
    })

    return resultado
}

// params: /forEach/Carlos
forEach.get('/:nome', (req, res) => {
    const { nome } = req.params

    res.json({
        tipo: 'params',
        valorRecebido: nome,
        resultado: listarPessoas(nome)
    })
})

export { forEach }
