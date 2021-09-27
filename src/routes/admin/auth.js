const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { validateSignupRequest, isSignupRequestValidated, validateSigninRequest, isSigninRequestValidated } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup',validateSignupRequest, isSignupRequestValidated,signup);
router.post('/admin/signin', validateSigninRequest, isSigninRequestValidated ,signin);



module.exports = router;