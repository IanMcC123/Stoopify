// Importing necessary packages
import express from 'express'; // Import Express to create the server
import mongoose from 'mongoose'; // Import Mongoose to interact with MongoDB
import dotenv from 'dotenv'; // Import dotenv to load environment variables
import cors from 'cors'; // Import CORS for handling Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser'; // Import cookie-parser for parsing cookies
import authRouter from './routes/auth.route.js'; // Import the router for authentication routes

// Configuration and setup
const PORT = 4000; // Define the port where the server will listen
const app = express(); // Create an instance of the Express application
dotenv.config(); // Load environment variables from a .env file

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(cookieParser()); // Use cookie-parser middleware for parsing cookies
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
})

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port 4000!')
})

// Mount the authentication router under the /api/auth path
app.use("/api/auth", authRouter);
