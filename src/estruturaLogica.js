import express from 'express'

const estruturaLogica = express.Router()

function montarResultado(maiorIdade, menorIdade) {
    return {
        maiorIdadeEmenorIdade: maiorIdade && menorIdade,
        maiorIdadeOuMenorIdade: maiorIdade || menorIdade,
        negacaoDeMaiorIdade: !maiorIdade
    }
}

// params: /estruturaLogica/true/false
estruturaLogica.get('/:maiorIdade/:menorIdade', (req, res) => {
    const maiorIdade = converterBoolean(req.params.maiorIdade, true)
    const menorIdade = converterBoolean(req.params.menorIdade, false)

    res.json({
        tipo: 'params',
        valorRecebido: { maiorIdade, menorIdade },
        resultado: montarResultado(maiorIdade, menorIdade)
    })
})

export { estruturaLogica }
