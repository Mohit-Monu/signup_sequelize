const bcrypt = require("bcrypt");
const USERS = require("../user");
async function login(req, res) {
  try {
    const email1 = await req.body.email;
    var password1 = await req.body.password;

    const search = await USERS.findAll();
    var count = 0;
    await search.forEach((element) => {
      if (element.email == email1) {
        count++;
        bcrypt.compare(password1, element.password, (err, result) => {
          if (result === true) {
            count++;
            console.log("logged in");
            res.send("logged in successfully");
          } else if (result === false) {
            console.log("wrong password");
            res.status(401).json();
          }
        });
      }
    });
    if (count == 0) {
      console.log("wrong email");

      res.status(404);
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
}
async function adduser(req, res) {
  try {
    const name1 = await req.body.name;
    const email1 = await req.body.email;
    var password1 = await req.body.password;
    const search = await USERS.findAll();
    var count = 0;
    const data1 = { name1, email1, password1 };
    await search.forEach((element) => {
      if (element.email == email1) {
        count++;
        console.log("email already exist")

        res.statusCode = 403;
        res.send("email exist");
      }
    });
    if (count == 0) {
      const saltrounds = 10;
      bcrypt.hash(password1, saltrounds, async (err, hash) => {
        password1 = hash;
        if (err) {
          console.log(err);
        }
        const data = await USERS.create({
          name: name1,
          email: email1,
          password: password1,
        });
        console.log(name1, email1, password1);
        console.log("updated");

        res.statusCode = 201;
        res.send("updated");
      });
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = { adduser, login };
