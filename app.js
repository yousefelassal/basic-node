const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3000;

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/test', (req, res) => {
    res.send('Hello Test!!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});