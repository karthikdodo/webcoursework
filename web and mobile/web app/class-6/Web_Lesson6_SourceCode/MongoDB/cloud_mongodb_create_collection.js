/**
 * Created by karthik gundlapalli on 5/27/2018
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("db-karthikchow");
    dbase.createCollection("college", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");

        db.close();
    });
});
