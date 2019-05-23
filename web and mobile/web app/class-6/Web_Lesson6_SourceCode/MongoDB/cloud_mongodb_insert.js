/**
 * Created by karthik gundlapalli on 5/27/2018.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("db-kar");
    var myobj = [
        { name: 'vardhaman', address: 'Highway 71'},
        { name: 'sachin', address: 'Lowstreet 4'},


    ];
    dbase.collection("college").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        db.close();
    });
});