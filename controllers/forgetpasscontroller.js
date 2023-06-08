const Sib = require("sib-api-v3-sdk");
require("dotenv").config();
async function resetpass() {
  const client = Sib.ApiClient.instance;

  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.API_KEY;

  const tranEmailApi = new Sib.TransactionalEmailsApi();

  const sender = {
    email: "bmohit700@gmail.com",
  };
  const receivers ={
    email:"mohitagarwalrr@gmail.com"
  }
  tranEmailApi
    .sendTransacEmail({
      sender,
      to:receivers,
      subject: "generate from here",
      textContent: "Codding rule blah blah",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

}
module.exports={resetpass}
