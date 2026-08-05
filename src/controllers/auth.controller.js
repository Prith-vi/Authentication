import userModel  from "../models/user.model";  
import crypto from "crypto";
import jwt from "jsonwebtoken"; //to create tokens


export async function register(req,res){
    const {username,email,password} = req.body;
    const isRegistered = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })
    if(isRegistered){
        res.status(409).json({
            message:"Username or email already exists."
        })
    }
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    const user = await uderModel.create({
        username,
        email,
        password: hashedPassword
    })
}