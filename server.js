var express = require("express");
var bodyParser = require("body-parser")
var app = express();
app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.listen(3000);


//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ThanhThien1111:j6oXdS1jbWXJ0xEh@cluster0.7uck4wy.mongodb.net/AppRaoVat2023?retryWrites=true&w=majority', function(error){
    if(error){
        console.log("Connected Err" + error);
    }else{
        console.log("connect successfull");
    }
});


require("./Routes/FileManager")(app);
require("./Routes/Account")(app);
require("./Routes/City")(app);