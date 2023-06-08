const sequelize = require("../database");
const Expenses = require("../models/expenses");
const USERS = require("../models/user");

async function showleaderboard(req, res, next) {
  try {

    const user = await USERS.findAll({
        attributes:['id','name',[sequelize.fn('sum',sequelize.col('expenses.expenseamount')),'total_cost']],
        include:[
            {
                model:Expenses,
                attributes:[]
            }
        ],
        group:['users.id'],
        order:[['total_cost','DESC']]
    });

    res.status(200).json({user})

  } catch (err) {
    console.log(err);
  }
}

module.exports = { showleaderboard };
