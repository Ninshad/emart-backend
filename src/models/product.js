const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        rquired: true
    },
    quantity: {
        type: Number,
        
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    // productPictures: [
    //     { img: {
    //         type: String
    //     }}
    // ],
    img: {
        type: String
    },
    reviews: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatedAt: Date,

}, {timestamps: true });


module.exports = mongoose.model('Product', productSchema)