const express = require("express");
const router = express.Router();

router.get("/", fischertechnik_controller.dashboard);

module.exports = router;
