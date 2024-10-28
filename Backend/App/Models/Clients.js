"use strict"
const crypto = require('crypto');
const { Schema, model } = require('mongoose');

const clientsModel = new Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    PhoneNo: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // ensures exactly 10 digits
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        default: null
    },
    password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    token: {
        type: String,
        trim: true,
        default: null
    },
    panno: {
        type: String,
        trim: true,
        default: null
    },
    aadhaarno: {
        type: String,
        trim: true,
        default: null
    },
    kyc_verification: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    pdf: {
        type: String,
        trim: true,
        default: null
    },
    add_by: {
        type: String,
        trim: true,
        default: null
    },
    apikey: {
        type: String,
        trim: true,
        default: null
    },
    apisecret: {
        type: String,
        trim: true,
        default: null
    },
    alice_userid: {
        type: Number,
        default: 0
    },
    brokerid: {
        type: Number,
        default: 0
    },
    authtoken: {
        type: String,
        trim: true,
        default: null
    },
    dlinkstatus: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    tradingstatus: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    wamount: {
        type: Number,
        default: 0,
        min: 0
    },
    del: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    clientcome: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    ActiveStatus: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    freetrial: {
        type: Number, // changed to Number
        enum: [1, 0],
        default: 0
    },
    refer_token: {
        type: String,
        default: null
    },
    forgotPasswordToken: {
        type: String,
        default: null
    },
    forgotPasswordTokenExpiry: {
        type: Date,
        default: null
    },
    devicetoken: {
        type: String,
        trim: true,
        default: null
    }
}, {
    timestamps: true
});

const Clients_model = model('CLIENTS', clientsModel);

module.exports = Clients_model;
