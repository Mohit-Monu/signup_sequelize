const USERS = require("../user");
async function login (req, res) {
  try {
    const email1 =await req.body.email;
    const password1 =await req.body.password;
    const search = await USERS.findAll();
    var count = 0;
    const data1={email1,password1}
    await search.forEach((element) => {
      if (element.email == email1) {
        count++;
        if(element.password==password1){
          count++
          res.send("Logged in Successfully");
        }
      }
      
    });
    if(count==0){
      res.status(404)
      res.send("User not found")

    }else if (count==1){
      res.status(401).json({data1});
    }

  } catch (err) {
    console.log(err);
  }
};
 async function adduser (req, res) {
  try {
    const name1 = await req.body.name;
    const email1 =await req.body.email;
    const password1 =await req.body.password;
    const search = await USERS.findAll();
    var count = 0;
    const data1={name1,email1,password1}
    await search.forEach((element) => {
      if (element.email == email1) {
        count++;
        res.statusCode=403;
        res.send("email exist")

      }
    });
    if (count == 0) {
      const data=await USERS.create({
        name: name1,
        email: email1,
        password: password1,
      });
      console.log(name1, email1, password1);
      res.statusCode=201
      res.send("updated")
    }
  } catch (err) {
    console.log(err)
  }
};
module.exports = { adduser, login };
