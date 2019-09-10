const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retriever cars." });
    });
});

router.post("/", validateCar, (req, res) => {
  const carData = req.body;

  db("cars")
    .insert(carData, "id")
    .then(([id]) => {
      db("cars")
        .where({ id })
        .first()
        .then(car => {
          res.status(200).json(car);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// custom middleware

function validateCar(req, res, next) {
  if (Object.keys(req.body).length < 1) {
    return res.status(400).json({ message: "Missing car data." });
  }

  if (!req.body.VIN || !req.body.make || !req.body.model || !req.body.mileage) {
    return res
      .status(400)
      .json({ message: "Cars require a valid VIN, make, model, and mileage." });
  }

  next();
}
module.exports = router;
