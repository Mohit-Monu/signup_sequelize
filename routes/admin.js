const express=require('express')
const usercontroller=require('../controllers/userController')
const router=express.Router();
router.post('/user/signup',usercontroller.adduser);
router.post('/user/login',usercontroller.login);
router.post('/expenses/user',usercontroller.addexpense);
router.get('/expenses/load',usercontroller.loadexpense);
router.post('/expenses/del',usercontroller.delexpenses);

module.exports=router;