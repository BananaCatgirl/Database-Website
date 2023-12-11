const express = require("express");
const router = express.Router();

const fischertechnik_controller = require("../controllers/fischertechnik_controller");

router.get("/", fischertechnik_controller.dashboard);

module.exports = router;
