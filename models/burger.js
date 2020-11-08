const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;

// function Burger(name) {
//     this.name = name;
//     this.devoured = false;
// }

// Burger.selectBurgers = function () {
//     return new Promise((resolve, reject) => {
//         orm.selectAll("burgers").then(results => {
//             resolve(results);
//         }).catch(() => {
//             reject("Error: could not retrieve burgers");
//         });
//     });
// };

// Burger.create = function (burger) {
//     return new Promise((resolve, reject) => {
//         orm.insertOne("burgers", {
//             burger_name: burger.name,
//             devoured: burger.devoured
//         }).then(results => {
//             // Get db generated ID
//             burger.id = results.insertId;
//             resolve(burger.id);
//         }).catch(() => {
//             reject("Error: burger not added");
//         });
//     });
// };

// Burger.updateDevoured = function (burgerId) {
//     return new Promise((resolve, reject) => {
//         orm.updateOne("burgers", "Devoured", true, "ID", burgerId).then(results => {
//             resolve(results);
//         }).catch(() => {
//             reject("Error: burger not updated");
//         });
//     })
// };


// module.exports = Burger;