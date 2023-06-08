const express=require('express')
const forgetpasscontroller=require('../controllers/forgetpasscontroller')

const router=express.Router();

router.post('/password/forgotpassword',forgetpasscontroller.resetpass);

module.exports=router;