const asyncHandler = require("express-async-handler");


exports.register_get = asyncHandler(async (req, res, next) =>
{

});

exports.register_post = asyncHandler(async (req, res, next) =>
{

});

exports.login = asyncHandler(async (req, res, next) =>
{
	res.render("useraccounts/login.pug");
});