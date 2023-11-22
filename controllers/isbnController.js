const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) =>
{
    res.render("isbn_start", { title: "browse books - Local Library" })
});