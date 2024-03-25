import User from "../models/user.js";
import bycrypt from 'bcrypt';
import 'dotenv/config'
import { sendCookie } from "../utils/feature.js";
import ErrorHandler from "../middlewares/error.js";



export const getAllUser = async (req, res) => {

}

export const LoginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) return next(new ErrorHandler("Invalid email or password", 400));


        const isMatch = await bycrypt.compare(password, user.password);

        if (!isMatch) return next(new ErrorHandler("Invalid email or password", 400));

        sendCookie(user, res, `Welcome Back,${user.name}`);
    } catch (error) {
        next(error)
    }
}


export const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email })

        if (user) return next(new ErrorHandler("User already exist", 400))

        const HashedPassword = await bycrypt.hash(password, 10);

        user = await User.create({ name, email, password: HashedPassword });

        sendCookie(user, res, "Registered Sucessfully", 201)
    } catch (error) {
        next(error)
    }
}

export const getUserProfile = (req, res) => {

    try {
        res.status(201).json({
            sucess: true,
            user: req.user,
        })
    } catch (error) {
        next(error)
    }
}

export const LogoutUser = (req, res) => {
    try {
        res.status(201).cookie('token', "", { 
            expires: new Date(Date.now()),
            sameSite:process.env.NODE_ENV ==="Development"? "lax" : "none",
            secure:process.env.NODE_ENV ==="Development"? false : true,
         }).json({
            sucess: true,
            user: req.user,
        })
    } catch (error) {
        next(js)
    }
}

