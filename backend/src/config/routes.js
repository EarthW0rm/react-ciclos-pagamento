const express = require('express');

module.exports = function(server){
    const routerApi = express.Router();
    server.use('/api', routerApi);

    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(routerApi, '/billingCycles');
};