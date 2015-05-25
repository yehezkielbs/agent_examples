#!/usr/bin/env node

//
// Node.js example for sending data to a value widget
//

var count = Math.floor(Math.random()*10);

// Create the response based on the value flow structure
var metrics = {
  value: count
};

// Output the metrics
console.log(JSON.stringify(metrics));

