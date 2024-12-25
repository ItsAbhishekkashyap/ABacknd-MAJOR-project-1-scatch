const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    // return jwt.sign({email: user.email, id: user._id}, process.env.JWT_KEY);
    return jwt.sign({email: user.email, id: user._id}, 'cdsnklbsdvdfkjsfs');
};

module.exports.generateToken = generateToken;

