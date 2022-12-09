const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
    },
    password:{
        type: String,
        required:true,
        trim:true,
        // validate(value){
        //     if(value.toLowerCase().includes('password')){
        //         throw new Error('Invalid')
        //     }
        // }
    },
    cpassword:{
        type: String,
        required:true,
        trim:true,
    }

});



//hashing password

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password, 12);
        this.cpassword = await bcryptjs.hash(this.cpassword, 12);
    }
    next();
});

const User = mongoose.model('user',userSchema);

module.exports = User