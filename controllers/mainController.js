// This is the main router
var express = require('express')
  , router = express.Router();

router.use('/', require('./registerCont.js'))

module.exports = router;