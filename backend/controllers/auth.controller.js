import User from '../models/user.model.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const {username, password, email, address, phoneNumber} = req.body;

    const validUser = await User.findOne({username})
    if (validUser){
        return res.status(400).json({ error: 'User with this username already exists.' });

    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ 
        username, 
        password: hashedPassword,
        email,
        address,
        phoneNumber,
    });

    try{
        await newUser.save()

        res.status(201).json({
            success: true,
            message: "User registered successfully!"
        });

    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal server error.' });
    }

};