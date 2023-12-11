const asyncHandler = require("express-async-handler");

exports.dashboard = asyncHandler(async (req, res, next) =>
{

    res.send("hello");
});