const express=require("express")
const cors=require("cors")
///connection
const {connection}=require("./db")
// Routers
const {usersRouter}=require("./router/users.router")
const {postsRouter}=require("./router/posts.router")
const { orders, verify}=require("./controllers/paymentControllers")
// authantication
const {auth}=require("./middleware/auth.middleware")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",usersRouter)
// app.use(auth)
app.use("/posts",auth,postsRouter)
app.post("/orders",orders);
app.post("/verify",verify);
app.listen(4444,async(res,err)=>{
    try{
        await connection  
        console.log("connected to datbase");
    }catch(err){
        console.log(err);
    }
    console.log("Server is running at port no 4444")
})
