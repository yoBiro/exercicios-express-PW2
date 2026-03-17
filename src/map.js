import express from 'express'

export function map(req, res) {
    const materias1 = ['Matemática', 'Português', 'Inglês', 'História', 'Geografia'];
    const materias2 = materias1.map((materia) => materia.toUpperCase());
    res.send(materias2);
}
