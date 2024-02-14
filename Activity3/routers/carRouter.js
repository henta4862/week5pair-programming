const express = require("express");
const carController = require("../controllers/carControllers");
const router = express.Router();

// Get All cars
router.get("/", carController.getAllCars);
// Create a car
router.post("/", carController.addCar);

// Get car by ID
router.get("/:id", carController.getCarById);
// Update car by ID (PATCH)
router.patch("/:id", carController.patchCars);
// Delete car by ID
router.delete("/:id", carController.deleteCar);

module.exports = router;