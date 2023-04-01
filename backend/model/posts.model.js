const mongoose=require("mongoose")

const postsSchema= mongoose.Schema({
    title : String,
    body : String,
    location : String,
    price : Number  
},
{ versionKey: false })

const PostsModel=mongoose.model("hotels", postsSchema)


module.exports={PostsModel}