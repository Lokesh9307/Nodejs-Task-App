import mongoose from "mongoose";


export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'BackendApi'
    })
        .then(() => console.log("Database Connected"))
        .catch((e) => console.log(e));
}