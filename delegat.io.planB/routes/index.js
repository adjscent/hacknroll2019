var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/js/call.js', function (req, res, next) {
  res.sendFile('call.js', {
    root: "views"
  });
});
router.get('/js/fireedit.js', function (req, res, next) {
  res.sendFile('fireedit.js', {
    root: "views"
  });
});
router.get('/css/style.css', function (req, res, next) {
  res.sendFile('style.css', {
    root: "views"
  });
});
router.get('/', function (req, res, next) {
  res.sendFile('index.html', {
    root: "views"
  });
});

module.exports = router;