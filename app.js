const express = require("express");
const app = express();
const path = require ("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")))

app.get ("/", (req, res)=>{

    res.render ("landing");

});

app.get ("/login", (req, res)=>{

    res.render ("login");

});

app.get ("/register", (req, res)=>{

    res.render ("register");

});

const uID = "JOSH";
const collection = "";

app.get ("/profile", (req, res)=>{

    res.render ("profile", {data: collection, user: uID });

});

app.listen(3000);
console.log ("App running on localhost:3000/");
