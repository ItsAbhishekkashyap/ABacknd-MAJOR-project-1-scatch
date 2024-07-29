const mongoose = require('mongoose');
const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    email: String,
    password: String,
   
    products: {
        type: Array,
        default: [],
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model('owner',ownerSchema);