var express = require('express');
var router = express.Router();
const accountManagement = require("../controllers/accountManagement");





router.get("/register", accountManagement.register_get);
router.post("/register", accountManagement.register_post);

router.get("/login", accountManagement.login);
// router.post("/login", accountManagement.login);

/* GET users listing. */
router.get('/', function (req, res, next)
{
	const LoggedIn = false;
	if (LoggedIn)
	{
		res.send("you are already logged in");
	}
	else
	{
		res.render("login", { title: "login - Local Library" });
	}

});

module.exports = router;
