const connection = require("../config/connection.js");

function printQM(num) {
 const arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objectToSql(ob) {
 const arr = [];

  for (var key in ob) {
   const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

const orm = {
  all: function (tableInput, cb) {
   const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {
   const queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQM(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function (table, objColVals, condition, cb) {
   const queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objectToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
