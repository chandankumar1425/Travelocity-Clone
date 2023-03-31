const express=require("express")
const usersRouter=express.Router()
const {UsersModel}=require("../model/users.model")
const {auth}=require("../middleware/auth.middleware")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
//to get the all users by LH:/linkedinuser/datausers
usersRouter.get("/alluser",async (req,res)=>{
    try{
        const users= await UsersModel.find()
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({"msg":error.message})
    }  
})
//to register
usersRouter.post("/register", async (req,res) => {
    const {name,email,mobile,password,firstname,lastname}=req.body
    try{
            bcrypt.hash(password , 2 , async ( err , hash ) => {
                const users=new UsersModel({ name, email, password:hash, mobile, firstname,lastname})
                await users.save()
                res.status(200).send({"msg":"Resister has been done "})
            })
    }catch(error){
                res.status(400).send({"msg":error.message})
    }

})
//login
usersRouter.post("/login", async ( req , res ) => {
    const {email , password}= req.body
    try{
        const users = await UsersModel.findOne({email})
        if( users ){
            bcrypt.compare(password,users.password,(err,result)=>{
                if( result ){
                    res.status(200).send({"msg":"Login Sucssesfull","token":jwt.sign({"userID":users._id},"project")})
                }else{
                    res.status(200).send("Login Failed")
                    console.log(err)
                }
            })
        }
    }catch(error){
        res.status(400).send({"msg":"Error"})

        console.log(error);
    }
})
module.exports={usersRouter}
