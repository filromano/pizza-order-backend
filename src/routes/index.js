const express = require('express');
const router = express.Router();
const database = require('../database/data.json');
const validateSpecial = require('../middleware/validateSpecial');

router.get('/pizzas', (req, res, next) => {
  res.send(database);
});

router.post('/order', validateSpecial, (req, res ,next) => {
  console.log(res.locals.points);
  res.send({order: true, points: res.locals.points});
})

module.exports = router;
