const express = require('express');//importing express
const app = express();//creating an instance of express
app.use(express.json());//using express to parse json
const mongoose = require("mongoose");//importing mongoose
mongoose.connect(
  "mongodb+srv://admin:<password>@cluster0.krr5a7y.mongodb.net/userappnew",//the password is retracted please
);//connecting to the database

//creating a model for the user
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

//creating a route for the user to signup
app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const username = req.body.email;
  const password = req.body.password;

  const existUser = await User.findOne({ email: username });
  //CRUD => create, read, update, delete
  if (existUser) {
    return res.status(400).json({ message: "User already exists" });
  } else {
    const user = new User({
      name: name,
      email: username,
      password: password,
    });
    user.save();
    res.json({ message: "User created successfully" });
  }
});
//creating a route for the user to login
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});