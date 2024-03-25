import express from "express";
import {getAllUser, getUserProfile, LoginUser, LogoutUser, RegisterUser} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Get Routes
router.get('/',(req,res)=>{
    res.send("Server is Working")
})

router.get('/all',getAllUser)

// Post Routes
router.post('/new',RegisterUser)

router.post('/login',LoginUser)

router.get('/logout',LogoutUser)

router.get('/me',isAuthenticated, getUserProfile)



export default router;