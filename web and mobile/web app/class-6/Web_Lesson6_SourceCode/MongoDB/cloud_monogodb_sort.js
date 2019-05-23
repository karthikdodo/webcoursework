var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db-kar");
    var mysort = { name: 1 };
    dbo.collection("student").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});