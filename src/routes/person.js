const express = require("express");
const router = express.Router();
const Person = require("../models/person");
const validatePerson = require("../middleware/validate");

// Get all people
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get person by ID
router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create person
router.post("/", validatePerson, async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Mobile number already exists" });
    }
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update person
router.put("/:id", validatePerson, async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Mobile number already exists" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

// Delete person
router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
