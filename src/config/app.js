const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const allowedCors = require('./cors');
const app = express();

const router = require('../routes/');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowedCors);

app.use('/api', router);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});