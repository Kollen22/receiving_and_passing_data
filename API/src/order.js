const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    idade: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', projectSchema);

module.exports = User;