const router = require("express").Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create("name", [req.body.name], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req.body);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

// router.get("/", function (req, res) {
//     Burger.selectBurgers().then(result => {
//         // Populate results based on devoured status
//         let devoured = result.filter(b => b.devoured === 1);
//         let undevoured = result.filter(b => b.devoured === 0);
//         res.render("index", {
//             undevouredList: undevoured,
//             devouredList: devoured
//         });
//     }).catch((err) => {
//         res.status(500).send({error: err});
//     });
// });

// router.get("/api/burger", (req, res) => {
//     Burger.selectBurgers().then((err, result) => {
//         res.send(result);
//     }).catch((err) => {
//         res.status(500).send({error: err});
//     });
// });

// router.post("/api/burger", (req, res) => {
//     if (!req.body.name) {
//         res.status(500).send({error: "Burger name is required!"});
//     }
//     let newBurger = new Burger(req.body.name);
//     Burger.create(newBurger).then(id => {
//         res.json(id);
//     }).catch((err) => {
//         res.status(500).send({error: err});
//     });
// });

// router.put("/api/burger/:id", (req, res) => {
//     Burger.updateDevoured(req.params.id).then(result => {
//         res.json(result);
//     }).catch((err) => {
//         res.status(500).send({error: err});
//     });
// });


// module.exports = router;