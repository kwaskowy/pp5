const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Konfiguracja middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Trasa główna
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Formularz
app.post('/submit', (req, res) => {
  console.log(":)")
  const data = req.body;

  
  res.json({ message: `Received from form 1: ${data}` });
});

// Odczyt wizyt
app.get('/visits', (req, res) => {
  res.json({message: `dane dane pobrane`})
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
