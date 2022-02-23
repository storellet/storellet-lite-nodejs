const express = require('express')
const { getSpreadSheet } = require('./utils/spreadsheet')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  res.render('pages/index', {
    pages: '../partials/list',
    data
  });
})

app.get('/:id', (req, res) => {
  res.render('pages/index', {
    pages: '../partials/view',
    data: {
    }
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})