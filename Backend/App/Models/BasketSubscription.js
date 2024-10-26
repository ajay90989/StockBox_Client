"use strict";

const { Schema, model } = require('mongoose');

const BasketSubscriptionSchema = new Schema({
    basket_id: {
        type: Schema.Types.ObjectId,
        ref: 'Basket', // Assuming there's a 'Plan' model to reference
        required: true
    },
    client_id: {
        type: Schema.Types.ObjectId,
        ref: 'Client', // Assuming there's a 'Client' model to reference
        required: true
    },
    plan_price: {
        type: Number,
        required: true,
        min: 0
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        min: 0,
        default: 0
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'expired'], // Example statuses
        default: 'active'
    },
    del: {
        type: Boolean,
        default: false // Indicates whether the subscription is marked as deleted
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Define the model
const BasketSubscription = model('BasketSubscription', BasketSubscriptionSchema);

module.exports = BasketSubscription;
