;
'use strict'
const cursos = [{
    _id: 1,
    titulo: 'Emprendimiento Verde',
    profesor: 'Yo pues mmv!',
    descripcion: 'Fuma como loco!',
    genero: 'Concientizacion'
}]

module.exports = {
    Query: {
        getCursos: () => {
            return cursos
        },
    }
}
