/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("db-kar");
    var myquery = { address: /^S/ };
    var newvalues = {$set: {name: "rohith"} };
    var myoptions = { multi: true };
    dbase.collection("student").updateMany(myquery, newvalues, myoptions, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record(s) updated");
        db.close();
    });
});
