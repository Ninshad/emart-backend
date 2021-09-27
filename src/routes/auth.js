const express = require('express');
const { signup, signin } = require('../controller/auth');
const router = express.Router();
const { validateSignupRequest, isSignupRequestValidated, validateSigninRequest, isSigninRequestValidated } = require('../validators/auth');


router.post('/signup',validateSignupRequest, isSignupRequestValidated, signup);
router.post('/signin',validateSigninRequest, isSigninRequestValidated ,signin);

// router.post('/profile',requireSignin,(req,res) => {
//     res.status(200).json({message:'profile'})
// })


module.exports = router;