const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', router);

app.listen(port, () => {console.log('Launching...')});

const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();


// The method of the root url. Be friendly and welcome our user :)
router.get("/", function (req, res) {
  res.json({ message: "Welcome to the APOD app." });
});

router.get("/favorite", function (req, res) {
  // TODO:
  res.json(await Image.find({date: req.params.date}));
});

router.post("/add", function (req, res) {
  // TODO:
  var data = new Image(req.body);
    try {
        data.save();
    } catch (e) {
        res.json({ message: "Something went wrong." });
    }
});

router.delete("/delete", function (req, res) {
  // TODO:
  res.json({result: await Image.find().pretty()});
});

app.use("/api", router); // API Root url at: http://localhost:8080/api

app.listen(port);
console.log("Server listening on port " + port);