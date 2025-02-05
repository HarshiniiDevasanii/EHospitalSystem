const mongoose=require('mongoose')
const appointments=new mongoose.Schema({
    type:String,
    date:String,
    time:String
})
const appointmentmodel=mongoose.model('appointment',appointments)
module.exports=appointmentmodel