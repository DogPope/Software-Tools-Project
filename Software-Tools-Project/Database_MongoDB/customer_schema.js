const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    // Customer ID
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        // Needs encryption
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cardnumber: {
        // Needs Encryption.
        type: String,
        required: true
    },
    accountcreation: {
            type: Date,
            'default': Date.now
        },
        status: {
            type: Boolean,
            required: true
    }
});

const accountSchema = new mongoose.Schema({
    // Customer ID
    currency: String,
    balance: {
        type: Decimal128(),
        required: true
    },
    createdon: {
        type: Date,
        'default': Date.now
    },
    status: {
        type: Boolean,
        required: true
    }
});

const currencySchema = new mongoose.Schema({
    // Currency ID
    currency: String,
    rates: {
        type: Decimal128(),
        required: true,
        default: 0.00
    }
});

const transactionSchema = new mongoose.Schema({
    // Account ID, Transaction ID
    currency: String,
    amount: {
        type: Decimal128(),
        required: true
    },
    dateOfTransaction: {
        type: Date,
        'default': Date.now
    }
});

const projectSchema = new mongoose.Schema({
  customer: [customerSchema],
  account: [accountSchema],
  currency: [currencySchema],
  transaction: [transactionSchema]
});

mongoose.model('Currency Exchange', projectSchema);