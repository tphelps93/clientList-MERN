const express = require("express");
const router = express.Router();

// Client Model

const Client = require("../../models/Client");

// @route   GET api/clients
// @desc    Get All Clients
// @access  Public
router.get("/", (req, res) => {
  Client.find()
    .sort({ date: -1 })
    .then((client) => res.json(client));
});

// @route   POST api/clients
// @desc    Create A Client
// @access  Public
router.post("/", (req, res) => {
  const newClient = new Client({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });
  newClient.save().then((client) => res.json(client));
});

// @route   DELETE api/clients
// @desc    Delete A Client
// @access  Public
router.delete("/:id", (req, res) => {
  Client.findById(req.params.id)
    .then((client) => client.deleteOne().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
