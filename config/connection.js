// Establishing mysql connection
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "newday1!",
      database: "burger_db",
    });
  };
  
  // Logging whether the connection was successful or not
  connection.connect(function (err) {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as: " + connection.threadId);
  });
  
  // Exporting the connection 
  module.exports = connection;