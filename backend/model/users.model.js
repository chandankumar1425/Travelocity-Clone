const mongoose=require("mongoose")

const usersSchema= mongoose.Schema({
    firstname:String,
    lastname:String,
    name:String,
    email:String,
    mobile:Number,
    password:String
  
},
{ versionKey: false })

const UsersModel=mongoose.model("profile", usersSchema)
module.exports={
    UsersModel
}