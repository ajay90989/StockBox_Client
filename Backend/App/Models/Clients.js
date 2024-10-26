"use strict"
const crypto = require('crypto');
const { Schema, model } = require('mongoose');

const clientsModel = Schema({
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
        min: 10,
        max: 10,
        default: null
    },
    password:{
        type:String,
        required: true,
        trim: true,
        default: null
    },
    token: {
        type: String,
        trim: true,
        unique: true,
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
        type: String,
        enum: ['1', '0'],
        default: '0'
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
        default: 0,
    },
    brokerid: {
        type: Number,
        default: 0,
    },
    authtoken: {
        type: String,
        trim: true,
        default: null
    },
    dlinkstatus: {
        type: Number,
        enum: [1, 0],
        default: 0
    },
    tradingstatus: {
        type: Number,
        enum: [1, 0],
        default: 0
    },
    wamount: {
        type: Number,
        default: 0,
        min: 0
    },
    del: {
        type: String,
        enum: [1, 0],
        default: 0
    },
    clientcome: {
        type: String,
        enum: [1, 0],
        default: 0
    },
    ActiveStatus: {
        type: String,
        enum: ['1', '0'],
        default: '0'
    },
    freetrial: {
        type: String,
        enum: ['1', '0'],
        default: '0'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    refer_token: {
        type: String,
        unique: true,
        default: null,
    },
    forgotPasswordToken: {
        type: String,
        default: null,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
        default: null,
    },
    devicetoken: {
        type: String,
        trim: true,
        default: null
    }
    
},
    {
        timestamps: true
    },

)


const Clients_model = model('CLIENTS', clientsModel);



module.exports = Clients_model;
