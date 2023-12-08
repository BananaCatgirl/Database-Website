const asyncHandler = require("express-async-handler");

exports.dashboard = asynchandler(async (req, res, next) => {

    res.send("hello");
});