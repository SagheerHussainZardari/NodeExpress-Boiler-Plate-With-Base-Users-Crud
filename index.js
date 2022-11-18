import express from "express";
import dotenv from "dotenv";
import userRouter from "./src/routes/user.route.js";
import connection from "./connection.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use("/users",userRouter);

app.get('*',(req,res) =>{
    res.send("404");
});
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on http://127.0.0.1:"+process.env.PORT);
});
