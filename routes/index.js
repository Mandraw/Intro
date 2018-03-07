var express = require('express');
var router = express.Router();

try {
  var dataJSON = require('../model/data');
}
catch(error) {
  console.error("JSON Fail" + error);
}

router.get('/:page', function(req, res, next) {
  res.render('index', {page : req.params.page , json : dataJSON });
})
.get('/', function(req, res, next) {
  res.render('index', {json : dataJSON });
});

module.exports = router;