const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableName) {
        const query = "SELECT * FROM ??";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    insertOne: function (tableName, obj) {
        const query = `INSERT INTO Burgers SET ?`;
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName, obj], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    updateOne: function (tableName, updCol, updVal, idCol, objId) {
        const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName, updCol, updVal, idCol, objId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
};

module.exports = orm;