const mongoose = require("mongoose");
const carSchema = require("../models/cars.js")

// Get All cars
const getAllCars = async (req, res) => {
    try {
      const cars = await carSchema.find();
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Create a New car
const addCar = async (req, res) => {
    try {
      const newCar = new carSchema(req.body);
      await newCar.save();
      res.json(newCar);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  // Update car by id (PATCH)
const patchCars= async (req, res) => {
    try {
      const car = await carSchema.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!car) {
        return res.status(404).json({ msg: "car not found" });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get car by ID
const getCarById = async (req, res) => {
    try {
      const car = await carSchema.findById(req.params.id);
      if (!car) {
        return res.status(404).json({ msg: "car not found" });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  // Delete car by ID
const deleteCar = async (req, res) => {
    try {
      const car = await carSchema.findOneAndDelete({ _id: req.params.id });
      if (!car) {
        return res.status(404).json({ msg: "car not found" });
      }
      res.json({ msg: "car deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  module.exports = {
    getAllCars,
    addCar,
    getCarById,
    patchCars,
    deleteCar, };
