"use strict";

const { Schema, model } = require('mongoose');

const BasicSettingSchema = new Schema({
    favicon: {
        type: String,
        trim: true,
        default: null
    },
    logo: {
        type: String,
        trim: true,
        default: null
    },
    website_title: {
        type: String,
        trim: true,
        default: null
    },
    email_address: {
        type: String,
        trim: true,
        default: null
    },
    contact_number: {
        type: String,
        trim: true,
        default: null
    },
    address: {
        type: String,
        trim: true,
        default: null
    },
    smtp_status: {
        type: Number,
        default: 0
    },
    smtp_host: {
        type: String,
        trim: true,
        default: null
    },
    smtp_port: {
        type: Number,
        default: 0
    },
    encryption: {
        type: String,
        trim: true,
        default: null
    },
    smtp_username: {
        type: String,
        trim: true,
        default: null
    },
    smtp_password: {
        type: String,
        trim: true,
        default: null
    },
    from_mail: {
        type: String,
        trim: true,
        default: null
    },
    from_name: {
        type: String,
        trim: true,
        default: null
    },
    to_mail: {
        type: String,
        trim: true,
        default: null
    },
    refer_title: {
        type: String,
        trim: true,
        default: null
    },
    refer_description: {
        type: String,
        trim: true,
        default: null
    },
    sender_earn: {
        type: String,
        trim: true,
        default: null
    },
    receiver_earn: {
        type: String,
        trim: true,
        default: null
    },
    refer_image: {
        type: String,
        trim: true,
        default: null
    },
    surepass_token: {
        type: String,
        trim: true,
        default: null
    },
    digio_client_id: {
        type: String,
        trim: true,
        default: null
    },
    digio_client_secret: {
        type: String,
        trim: true,
        default: null
    },
    digio_template_name: {
        type: String,
        trim: true,
        default: null
    },
    razorpay_key: {
        type: String,
        trim: true,
        default: null
    },
    razorpay_secret: {
        type: String,
        trim: true,
        default: null
    },
    freetrial: {
        type: String,
        trim: true,
        default: 0
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Define the model
const BasicSetting = model('BasicSetting', BasicSettingSchema);

module.exports = BasicSetting;
