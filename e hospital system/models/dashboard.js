const mongoose=require('mongoose')
const dashboard=new mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    age:String,
    dob:String,
    address:String
})
const dashboardmodel=mongoose.model('dashbo',dashboard)
module.exports=dashboardmodel