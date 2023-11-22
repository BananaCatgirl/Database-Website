const express = require("express");
const router = express.Router();

const isbnController = require("../controllers/isbnController.js");
const { models } = require('mongoose');

router.get("/", isbnController.index);

module.exports = router;