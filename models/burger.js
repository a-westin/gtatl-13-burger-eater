const orm = require("../config/orm.js");

function Burger(name) {
    this.name = name;
    this.devoured = false;
}

Burger.selectBurgers = function () {
    return new Promise((resolve, reject) => {
        orm.selectAll("Burgers").then(results => {
            resolve(results);
        }).catch(() => {
            reject("Error: could not retrieve burgers");
        });
    });
};

Burger.create = function (burger) {
    return new Promise((resolve, reject) => {
        orm.insertOne("Burgers", {
            burger_name: burger.name,
            devoured: burger.devoured
        }).then(results => {
            // Get db generated ID
            burger.id = results.insertId;
            resolve(burger.id);
        }).catch(() => {
            reject("Error: burger not added");
        });
    });
};

Burger.updateDevoured = function (burgerId) {
    return new Promise((resolve, reject) => {
        orm.updateOne("Burgers", "Devoured", true, "ID", burgerId).then(results => {
            resolve(results);
        }).catch(() => {
            reject("Error: burger not updated");
        });
    })
};


module.exports = Burger;