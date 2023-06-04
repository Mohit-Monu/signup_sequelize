const express=require('express')
const cors=require('cors');
const User=require('./models/user')
const Expense=require('./models/expenses')

const bodyParser=require('body-parser');
const sequelize=require('./database')
const userRoutes=require('./routes/users')
const expensesRoutes=require('./routes/expenses')

const app=express()
app.use(cors())
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false  }));


app.use(userRoutes);
app.use(expensesRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);


sequelize.sync()
.then((res)=>{
    app.listen(3000);
}).catch((err)=>{
    console.log(err);
})