const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://chandan:chandankumar@cluster0.spzoums.mongodb.net/Travelocity?retryWrites=true&w=majority")

module.exports={
    connection
}


