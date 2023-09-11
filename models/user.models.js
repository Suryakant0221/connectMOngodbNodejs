const mongoose =require('mongoose')


// here we create a schemas
const UserSchema= new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        uppercase:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    mobile:Number,
})

// Now we make a models

const UserModel =mongoose.model("UserModel",UserSchema)
// now export it 
module.exports =UserModel;