const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://bhanavigoyal:MBkmrIq0tzBWFvwe@cluster0.qwvgsw8.mongodb.net/")
    .then(()=>console.log("connected!"));

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowerCase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        maxLength: 50
    },
    
});

const User = mongoose.model("User",userSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,       //Reference to User Model
        ref: User,
        required: true,
    },

    balance:{
        type: Number,
        required: true
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports={
    User,
    Account
};