// Importing necessary modules and functions
import express from 'express';
import { signup, login } from '../controllers/auth.controller.js';

// Creating an instance of Express Router. Helps organize your route handlers into separate files, making your code modular and easier to manage
const router = express.Router();

// Handling POST requests for user signup
router.post("/signup", signup);

// Handling POST requests for user login
router.post("/login", login);

// Exporting the router for use in other parts of the application
export default router;