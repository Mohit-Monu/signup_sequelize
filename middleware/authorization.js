const jsw=require('jsonwebtoken');
const User=require('../models/user');

async function authenticate(req,res,next){
    try{
        const token=req.header('Authorization');
        const user= jsw.verify(token,'12345');
        User.findByPk(user.userId).then(user=>{
            req.user=user.id
            next()
        })
    }catch(err){
        console.log(err);
        return res.status(401).json({success:false})
    }
}
module.exports={authenticate}