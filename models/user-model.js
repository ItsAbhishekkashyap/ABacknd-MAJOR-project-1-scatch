const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    email: String,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        }
    ],

    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
});

module.exports = mongoose.model('user', userSchema);