const express=require('express')
const usercontroller=require('../controllers/userController')
const router=express.Router();
router.post('/user/signup',usercontroller.adduser);
router.post('/user/login',usercontroller.login);
module.exports=router;