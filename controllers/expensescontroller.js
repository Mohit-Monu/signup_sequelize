const expenses = require("../models/expenses");

async function addexpense(req,res){
    try{
      const amount=req.body.amt;
      const description=req.body.des;
      const category=req.body.cat;

  
      await expenses.create({
        expenseamount:amount,
        category:category,
        description:description,
        userId:req.user
      })
      res.send("expenses uploaded")
    }catch(err){
      console.log(err);
    }
  
  }
  async function loadexpense(req,res){
    const search = await expenses.findAll({where:{userId:req.user}});
    res.send(search);
  }
  
  async function delexpenses(req,res){
    const id1=req.params.id;
    const count=await expenses.destroy({where:{id:id1}});
    res.send("deleted");
  }
  
  
  module.exports = {addexpense,loadexpense,delexpenses };
  