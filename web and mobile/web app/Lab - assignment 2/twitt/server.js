var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var Twitter = require("twitter");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("port", process.env.PORT || 8000);
app.set("host", process.env.HOST || "0.0.0.0");

var client = new Twitter({
    consumer_key: "kra43A7vN2FVNG5HddbzTJJW0",
    consumer_secret: "6GPu0dQA3WZSQlUTJ0o3FOLd4nPCugNLeSjuT4zUB1X2xZmL5T\n",
    access_token_key: "374939425-J5FltY81dVh4nVDzIBQ3ZBEXbRq72VEr01Q4EJrK",
    access_token_secret: "v8tQM5l6fksWSDzm2VOXhU4CeDZ3gKLGaQG88N8HKXO9P"
});

app.get("/", function(req, res) {
    var name = req.query.screen_name;

    client.get("friends/list", {
        screen_name: name
    }, function(error, tweets, response) {
        if (!error) {
            res.json(tweets);
        } else {
            res.status(500).json({
                error: error
            });
        }
    });
});

app.listen(app.get("port"), function() {
    console.log("app running");
});