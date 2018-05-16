import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
    name: {type: String, restful: true},
    value: {type: Number, min: 0, require: true }
});

const debtSchema = new mongoose.Schema({
    name: {type: String, restful: true},
    value: {type: Number, min: 0, require: true },
    status: {type: String, require: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, restful: true},
    month: { type: Number, min: 1, max: 12, require: true},
    month: { type: Number, min: 1982, max: 2182, require: true},
    credits: [creditSchema],
    debts: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);