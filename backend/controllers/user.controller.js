const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model');


module.exports.registerUser = async (req, res, next) => {

    // agr user.routes.js mein validate krte time koi error aata h to use return krdo
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    // generate token
    const token = user.generateAuthToken();

    // return the token and user object
    res.status(201).json({ token, user });

}


module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
    // while creating the user model we set the select property of password to be false
    // so it won't return password untill we specify +password here in the select property
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();

    // setting the token in the cookies part of the response.
    res.cookie('token', token);

    res.status(200).json({ token, user });
}


module.exports.getUserProfile = async (req, res, next) => {

    res.status(200).json(req.user);

}


module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

    // remove the token after 24 hours
    await blackListTokenModel.create({ token });

    res.status(200).json({ message: 'Logged out' });

}