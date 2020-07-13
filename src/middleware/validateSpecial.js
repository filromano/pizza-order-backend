const database = require('../database/data.json');
const { response } = require('express');

function validateSpecial(req, res, next) {
  const special = database.pizzaDia;
  const order = req.body.order;
  if(order.flavor1 === special || (order.flavor2 && order.flavor2 === special)) {
    res.locals.points = database.pontosDia; 
  } else {
    res.locals.points = 0; 
  }
  next();
}

module.exports = validateSpecial;
