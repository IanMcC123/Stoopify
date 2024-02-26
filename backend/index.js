import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';


const PORT = 4000;
const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());



mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log('Server is running on port 4000!')
})


app.use("/api/auth", authRouter);





