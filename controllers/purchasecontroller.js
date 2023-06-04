const Razorpay=require('razorpay');
const Order = require("../models/order");

async function buymembership(req,res){
    var rzp=new Razorpay({
        key_id:process.env.RAZORPAY_KEY_ID,
        key_secret:process.env.RAZORPAY_KEY_SECRET
    })
    const amount=2500;
    rzp.orders.create({amount,currency:"INR"},(err,order)=>{
        if(err){
            console.log(err);
        }else{
            req.user.createOrder({orderid:order.id,status:"PENDING"}).then(()=>{
                res.status(201).json({order,key_id:rzp.key_id})

            }).catch((err)=>{
                console.log(err)
            })
        }

    })

} 
async function updatetransaction(req,res){
    

}


module.exports={buymembership,updatetransaction}