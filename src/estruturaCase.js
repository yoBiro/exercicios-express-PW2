import express from 'express'

const diaSemana = express.Router()

function buscarDia(dia) {
    switch (dia) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda-feira'
        case 3:
            return 'Terca-feira'
        case 4:
            return 'Quarta-feira'
        case 5:
            return 'Quinta-feira'
        case 6:
            return 'Sexta-feira'
        case 7:
            return 'Sabado'
        default:
            return 'Dia invalido'
    }
}

//  params: /estruturaCase/3
diaSemana.get('/:dia', (req, res) => {
    const dia = Number(req.params.dia) || 1

    res.json({
        tipo: 'params',
        valorRecebido: dia,
        resultado: buscarDia(dia)
    })
})

export { diaSemana }
