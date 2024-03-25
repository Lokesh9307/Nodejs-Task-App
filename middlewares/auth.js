import User from "../models/user.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token)
        return res.status(201).json({
        sucess:true,
        message:"Login First"
    })

    const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodedToken._id)
    next()
}