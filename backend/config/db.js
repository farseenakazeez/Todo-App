import mongoose from "mongoose";
const connectDb = async ()=>{

    try{

        let connect = await mongoose.connect(process.env.Mongo_URL)

        console.log("Db connected")
    }catch(error){
        console.log(error?.message)
    }
}
export default connectDb;
