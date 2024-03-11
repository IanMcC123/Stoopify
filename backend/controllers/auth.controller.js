import User from '../models/user.model.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const {username, password, email, address, phoneNumber} = req.body;
    const { street, city, state, zipCode, country } = address;

    const validUser = await User.findOne({username})
    if (validUser){
        return res.status(400).json({ error: 'User with this username already exists.' });

    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ 
        username, 
        password: hashedPassword,
        email,
        address: {
            street,
            city,
            state,
            zipCode,
            country,
        },
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

export const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Compare the entered password with the stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Passwords match, so you can consider the user logged in
            const token = jwt.sign({
                username: user.username,
                id: user._id,
            }, process.env.JWT_SECRET)
              
            res.cookie('session_token', token);
            res.status(200).json({ success: true, message: 'Login successful!' });
        } else {
            // Passwords don't match
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
