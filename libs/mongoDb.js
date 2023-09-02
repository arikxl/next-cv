import mongoose from "mongoose";


const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to Mongo')
    } catch (error) {
        console.log(error.message);
    }

}


export default connectMongoDB;