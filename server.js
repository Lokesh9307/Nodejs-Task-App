import { connectDB } from "./db/dbConnect.js"
import 'dotenv/config'
import { app } from "./app.js"


// Database
connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})