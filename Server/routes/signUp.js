const express = require('express');
const router = express.Router();

app.post('/api/SignUp', async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        // Validate input
        if (!firstName || !email || !password || role === 'role') {
            return res.status(400).json({ success: false, message: 'Invalid input' });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;