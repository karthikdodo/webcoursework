/**
 * Created by karthik gundlapalli on 5/27/2018
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("db-kar");
    dbase.dropCollection("karCollection", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});