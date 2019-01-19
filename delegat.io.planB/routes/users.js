var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/js/call.js', function (req, res, next) {
  res.sendFile('call.js', {
    root: "views"
  });
});

router.get('/', function (req, res, next) {
  res.sendFile('temp.html', {
    root: "views"
  });
});

module.exports = router;
