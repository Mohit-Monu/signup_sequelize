const express=require('express')
const usercontroller=require('../controllers/userController')
const router=express.Router();
router.post('/user/signup',usercontroller.adduser);
router.get('/user/search',usercontroller.searchUser);
module.exports=router;