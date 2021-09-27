const {check, validationResult} = require('express-validator');

exports.validateSignupRequest = [
    check('firstName').notEmpty().withMessage('FirstName is required'),
    check('lastName').notEmpty().withMessage('LastName is required'),
    check('email').isEmail().withMessage('Enter valid email'),
    check('password').isLength({min: 6}).withMessage('Password must be atleast 6 charactors')
];
exports.isSignupRequestValidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length >0){
        return res.status(400).json({ error: errors.array()[0].msg})
    }
    next();
}
exports.validateSigninRequest = [
    check('email').isEmail().withMessage('Enter valid email'),
    check('password').isLength({min: 6}).withMessage('Password must be atleast 6 charactors')
];
exports.isSigninRequestValidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length >0){
        return res.status(400).json({ error: errors.array()[0].msg})
    }
    next();
}