//all author list
//each author links to their details page
//birth and death in same row as name
const Author = require("../models/author");
const asyncHandler = require("express-async-handler");



exports.author_list = asyncHandler(async (req, res, next) =>
{
    const allAuthors = await Author.find({}, "first_name family_name date_of_birth date_of_death")
    .sort({ first_name:1})
    .populate("author")
    .exec();

    res.render("author_list",{title: "List of Authors",author_list: allAuthors});

});