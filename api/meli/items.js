import app from '../expressInit'

var mercadolibre = require('./routes/mercadolibre-api.js')
app.use('/', mercadolibre)

module.exports = app
