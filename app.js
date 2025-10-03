console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB connect => chaqirish
const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");
// 4: Routing code
// app.get("/", function (req, res) {
//   res.end(`<h1 style="background:red">HELLO WORLD by BekzodAli</h1>`);
// });

// // app.get("/hello", function (req, res) {
// //   res.end(`<h1 style="background:red">Hi my name is JONY</h1>`);
// // });

// // app.get("/gift", function (req, res) {
// //   res.end("<h1>Siz sovgalar bo'limidasiz</h1>");
// // });

app.post("/create-item", (req, res) => {
  console.log("user entered / create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
    // if (err) {
    //   console.log(err);
    //   res.end("something went wrong");
    // } else {
    //   res.end("successfully added");
    // }
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

// app.post("/delete-all", (req, res) => {
//   if (req.body.delete_all) {
//     db.collection("plans").deleteMany(function () {
//       res.json({ state: "hamma rejalar ochirilsin" });
//     });
//   }
// });

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;

// document.getElementById("clean-all").addEventListener("click", function () {
//   axios.post("/delete-all", { delete_all: true }).then((response) => {
//     alert(response.data.state);
//     document.location.reload();
//   });
