"use strict";

const { Schema, model } = require('mongoose');

const BasketSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    accuracy: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    mininvamount: {
        type: Number,
        required: true,
        min: 0
    },
    portfolioweightage: {
        type: String,
        default: null
    },
    stocks: {
        type: String,
        default: null
    },
    pricerange: {
        type: String,
        default: null
    },
    stockweightage: {
        type: String,
        default: null
    },
    entryprice: {
        type: String,
        default: null
    },
    entrydate: {
        type: String,
        default: null
    },
    exitprice: {
        type: String,
        default: null
    },
    exitdate: {
        type: String,
        default: null
    },
    comment: {
        type: String,
        default: null
    },
    returnpercentage: {
        type: String,
        default: null
    },
    holdingperiod: {
        type: String,
        default: null
    },
    potentialleft: {
        type: String,
        default: null
    },
    themename: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ['active', 'inactive'], // Example statuses
        default: 'active'
    },
    add_by: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    del: {
        type: Boolean,
        default: false // Indicates whether the Basket is marked as deleted
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Define the model
const Basket = model('Basket', BasketSchema);

module.exports = Basket;
