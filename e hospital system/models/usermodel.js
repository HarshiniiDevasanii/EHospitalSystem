const mongoose=require('mongoose')
const Users=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)
const UserModel=mongoose.model('user',Users)
module.exports=UserModel