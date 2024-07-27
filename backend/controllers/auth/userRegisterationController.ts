import { Request, Response } from 'express';
import { UserModel } from '../../models';
import { generateHashedPassword, generateToken, tokenDuration } from '../../utils';
import { validateEmail, validateUsername } from '../../utils';

const userRegistration = async function (req: Request, res: Response): Promise<void> {
    const { name, email, password, password_confirmation } = req.body;

    try {
        // Check if all fields are present
        if (!name || !email || !password || !password_confirmation) {
            res.status(400).json({ status: "failed", message: 'All fields are required' });
            return;
        }

        // Email and password validation
        if (!validateEmail(email) || !validateUsername(name)) {
            res.status(400).json({ status: "failed", message: 'Enter correct email id and at least 5 letters name' });
            return;
        }

        // Check if password and password_confirmation fields are same
        if (password !== password_confirmation) {
            res.status(400).json({ status: "failed", message: 'Password and Confirm Password doesn\'t match' });
            return;
        }

        // Check if user with the provided email already exists
        const existingUser = await UserModel.getUser({ email: email });
        if (existingUser) {
            res.status(409).json({ status: "failed", message: 'User with the provided email already exists' });
            return;
        }

        // Hash the password
        const hashedPassword = await generateHashedPassword(password);

        // Create user in the database
        const newUser = await UserModel.createUser({ name, email, password: hashedPassword });

        // Generate token
        const token = generateToken(newUser.userId!);

        // Add token to cookie
        res.cookie('jwt', token, { httpOnly: true, maxAge: tokenDuration * 1000 });
        res.status(201).json({ status: "success", message: 'User registered successfully', user: newUser, token: token });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ status: "failed", message: 'Internal server error' });
    }
}

export default userRegistration;