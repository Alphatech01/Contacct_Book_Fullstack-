const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please add the contact email"]
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone"]
    },
    designation: {
        type: String,
        required: [true, "Please add the contact designation"]
    }
}, {
    timestamps: true
});


module.exports=mongoose.model('Contact', contactSchema);