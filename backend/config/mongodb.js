import mongoose from 'mongoose'
import process from 'process'

const connectDB = async () =>{

    mongoose.connection.on('connected', ()=> console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URL}/priscrpto`)
}

export default connectDB