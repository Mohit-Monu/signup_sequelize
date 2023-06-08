const expenses = require("../models/expenses");
const USERS = require("../models/user");


async function addexpense(req,res){
    try{
      const amount=req.body.amt;
      const description=req.body.des;
      const category=req.body.cat;
      const id=req.user.id;

      console.log(req.user.id)
      await expenses.create({
        expenseamount:amount,
        category:category,
        description:description,
        userId:id
      })
      res.send("expenses uploaded")
    }catch(err){
      console.log(err);
    }
  
  }
  async function loadexpense(req,res){
    const search = await expenses.findAll({where:{userId:req.user.id}})
    const user1=await USERS.findAll({where:{id:req.user.id}})
    res.status(202).json({result:search,user:user1})

  }
  
  async function delexpenses(req,res){
    const id1=req.params.id;
    const count=await expenses.destroy({where:{id:id1}});
    res.send("deleted");
  }
  
  
  module.exports = {addexpense,loadexpense,delexpenses };
  