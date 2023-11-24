//imports
const asyncHandler = require("express-async-handler");

//Models
const user = require("../models/apiV1/user");


exports.User = asyncHandler((req, res, next) =>
{
    res.send("<b>FUCK YOU!</b>");
});

exports.UserImage = asyncHandler((req, res, next) =>
{
    console.log("user ID: " + req.body.userID);
    res.sendFile("/images/favicon.png");
});

exports.UserProfile = asyncHandler((req, res, next) =>
{
    res.send("a User Profile");
});
