const USERS=require('../user');
const adduser=async function(req,res){
    try{
        const name1=req.body.name;
        const email1=req.body.email;
        const password1=req.body.password;

        console.log(name1,email1,password1)
        const data=await USERS.create({
            name:name1,
            email:email1,
            password:password1
        })
        res.status(201).json({data})
    }
    catch(err){
        console.log(err);
    }
}
module.exports=adduser;