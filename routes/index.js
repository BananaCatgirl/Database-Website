var express = require('express');
const { DateTime } = require('luxon');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next)
{
  res.redirect("/catalog");
});

router.get("/coin", function (req, res, next)
{
  const number = Math.random();
  let flipResult = -1;
  if (number > 0.5)
  {
      flipResult = "Heads"
  }
  else if (number < 0.5)
  {
      flipResult = "Tails"
  }
  else if (number == 0.5)
  {
      flipResult = "corner"
  }
  else
  {
      flipResult = -2;
  }

  const time = DateTime.now().toJSDate("de").toLocaleString(DateTime.TIME_SIMPLE);

  res.render("coin", { title: `Coin Flip: ${flipResult}`,flipresult:flipResult,time:time })

});

module.exports = router;
