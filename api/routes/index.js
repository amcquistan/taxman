
'use strict'

const taxCtrl = require('../controllers')

module.exports = (app) => {
    app.use(['/calculate/:stateName/:cityName/:amount', '/taxrate/:stateName/:cityName'], (req, res, next) => {
        const state = req.params.stateName
        if (!taxCtrl.stateUrls.hasOwnProperty(state.toLowerCase())) {
            res.status(404)
                    .send({message: `No state info found for ${state}`})
        } else {
            next()
        }
    })

    app.route('/taxrate/:stateName/:cityName')
        .get(taxCtrl.getTaxRate)
    
    app.route('/calculate/:stateName/:cityName/:amount')
        .get(taxCtrl.calculateTaxes)
    
    app.use((req, res) => {
        res.status(404)
            .send({url: `sorry friend, but url ${req.originalUrl} is not found`})
    })
}

