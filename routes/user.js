var express = require('express');
var router = express.Router();

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
