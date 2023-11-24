const express = require("express");
const router = express.Router();

//Require Controller Modules
const apiV1Controller = require("../controllers/apiV1Controller");




router.get("/", function (req, res, next)
{
	res.redirect("/api/v1");
});
router.get("/v1", function (req, res, next)
{
	res.send("api v1 start");
});

router.get("/v1/user/:userID/", apiV1Controller.User);
router.get("/v1/user/:userID/Profile", apiV1Controller.UserProfile);
router.get("/v1/user/:userID/Profile/picture", apiV1Controller.UserImage);
router.get("/v1/user/:userID/Profile/banner", apiV1Controller.User);
router.get("/v1/user/:userID/Profile/description", apiV1Controller.User);


router.get("/v1/Handle")




module.exports = router;