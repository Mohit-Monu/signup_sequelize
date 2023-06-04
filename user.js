const Sequelize=require('sequelize');
const sequelize=require('./database');
const users=sequelize.define('users',
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING
    }
})
const expenses=sequelize.define('expenses',
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    expenseamount:{
        type:Sequelize.STRING
    },
    category:{
        type:Sequelize.STRING,
    },
    description:{
        type:Sequelize.STRING
    }
})
module.exports={users,expenses};