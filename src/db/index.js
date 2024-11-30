import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {

    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MongoDB connected!!\nDB HOST: ${connectionInstance.connection.host}`);

    }catch(e){
        console.error(e);
        process.exit(1);
    }
}

export default connectDB;




//ALternate: Just put in src/index.js
/*; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    } catch (e) {
        console.error(e);
        throw e;
    }
})()*/