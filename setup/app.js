;
'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    { makeExecutableSchema } = require('graphql-tools'),
    { graphqlHTTP } = require('express-graphql'),
    { join } = require('path'),
    { readFileSync } = require('fs'),
    pruebaResolve = require('../resolvers/prueba.resolvers'),
    cursoResolve = require('../resolvers/curso.resolvers')

let app = express(),
    /*usuarioRuta = require('../rutas/usuarios.rutas'),
    archivoRuta = require('../rutas/file.ruta')*/
    //db = connectDb()
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

const typeDefs = readFileSync(join(__dirname, '../schemas', 'schemas.graphql'), 'utf-8'),
    schema = makeExecutableSchema({typeDefs, resolvers: [cursoResolve, pruebaResolve]})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/gql', graphqlHTTP({
    schema: schema,
    rootValue: cursoResolve,
    graphiql: true
}))

app.use(bodyParser.json())

//cors 
app.use(cors(corsOptions))

///app.use('/api', usuarioRuta)
//app.use('/api', archivoRuta)


module.exports = app