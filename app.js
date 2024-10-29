const express = require('express');
const bodyParser = require('body-parser');
const Animal = require('./models/animal.model.js');
const dbConnect = require('./config/database.js');
const app = express();
const port = 3000;
dbConnect();
// Konfiguracja middleware
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Trasa główna
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Formularz
app.post('/submit', async (req, res) => {
  try {
    
    const animal = await Animal.create(req.body)

    res.status(200).json({ message: "Zwierzę zostało zapisane pomyślnie!", data: animal });
    console.log("wyslano pomyslnie")
  } catch (error) {
    console.error("Błąd zapisu zwierzęcia:", error);
    res.status(500).json({ message: error.message });
  }
});

//pobranie wizyt
app.get('/animals', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json({ message: "Zwierzęta pobrane pomyślnie!", data: animals });
  } catch (error) {
    console.error("Błąd pobierania zwierząt:", error);
    res.status(500).json({ message: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
