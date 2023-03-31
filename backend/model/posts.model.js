const mongoose=require("mongoose")

const postsSchema= mongoose.Schema({

    title : String,
    body : String,
    device : String,
    no_of_comments : Number,
    userID: String
},
{ versionKey: false })

const PostsModel=mongoose.model("linkedinpost", postsSchema)


module.exports={
    PostsModel
}