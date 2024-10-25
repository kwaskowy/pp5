const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const upload = multer();
const port = 3000;

// Konfiguracja middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Trasa główna
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Formularz 1
app.post('/form1', upload.none(), (req, res) => {

  const data = req.body;
  const { animalName, species, breed, weight, birthdate } = data;

  console.log(`Wprowadzone dane o zwierzęciu:\nImię: ${animalName}\nGatunek: ${species}\nRasa: ${breed}\nWaga: ${weight}\nData urodzenia: ${birthdate}`);  
  res.json({ message: `Wprowadzone dane o zwierzęciu:\nImię: ${animalName}\nGatunek: ${species}\nRasa: ${breed}\nWaga: ${weight}\nData urodzenia: ${birthdate}` });
});

app.get('/form1', (req, res) => {
  res.json({ message: 'TEST TEST' });
});

// Formularz 2
app.post('/form2', (req, res) => {
  const data = req.body.input2;
  res.json({ message: `Received from form 2: ${data}` });
});

app.get('/form2', (req, res) => {
  res.json({ message: 'Form 2 GET response' });
});

// Formularz 3
app.post('/form3', (req, res) => {
  const data = req.body.input3;
  res.json({ message: `Received from form 3: ${data}` });
});

app.get('/form3', (req, res) => {
  res.json({ message: 'Form 3 GET response' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
