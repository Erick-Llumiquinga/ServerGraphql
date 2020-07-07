;
'use strict'

const env = require('dotenv').config(),
    app = require('./app'),
    port = process.env.port || 3000

app.listen(port, (err) => {
    if(!err) return console.log(`El servidor esta levantado en http://localhost:${port}`)

    return console.log('El servicio no funciona')
})
