import mongoose from 'mongoose'

const connectDB =async ()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI, {
            // useCreatendex: true, 
            useUnifiedTopology : true,
            useNewUrlParser : true,
            
        })

        console.log(`MongoDB Connected : ${process.env.MONGO_URI}`.cyan.underline);
    } catch (error){

        console.log(`Error : ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}


export default connectDB