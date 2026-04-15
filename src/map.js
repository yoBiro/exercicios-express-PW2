import express from 'express'

const map = express.Router()

function transformarMaterias(materiaExtra = '') {
    const materias = ['Matematica', 'Portugues', 'Ingles', 'Historia', 'Geografia']

    if (materiaExtra) {
        materias.push(materiaExtra)
    }

    return materias.map((materia) => materia.toUpperCase())
}

// query string: /map?materia=Fisica
map.get('/', (req, res) => {
    const { materia = '' } = req.query

    res.json({
        tipo: 'query',
        valorRecebido: materia,
        resultado: transformarMaterias(materia)
    })
})

export { map }
