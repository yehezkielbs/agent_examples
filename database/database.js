#!/usr/bin/env node

//
// Node.js example for querying a database and sending it to a Telemetry flow
// We assume we have a database named database and a users collection inside it
//

// Make sure you have mongodb installed (npm install mongodb)
var mongodb = require('mongodb');

// Create a client
var MongoClient = mongodb.MongoClient;

// Your database
var url = 'mongodb://localhost:27017/database';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
    process.exit(1);

  } else {
    db.close();

     // Get the users collection
    var users = db.collection('users');

    // Get the users count
    var count = users.count();

    // Create the response based on the number flow structure
    var metrics = {
    	number: {
    		value: count
    	}
    };

    // Output the metrics
    console.log(JSON.stringify(metrics));
  }
});

