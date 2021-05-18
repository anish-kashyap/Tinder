const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dbCards = require("./dbCards");
const Cards = require("./dbCards");

//app config
const app = express();
const port = process.env.PORT || 8001;

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect("mongodb://localhost:27017/tinderdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/tinder/cards", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listeners
app.listen(port, () => console.log(`listening on local host : ${port}`));
