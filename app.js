const express = require('express');
const mongose = require('mongoose')
const bodyParser = require('body-parser');
const Animal = require('./models/animal.model.js')
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000;

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

// Odczyt wizyt
app.get('/visits', (req, res) => {
  res.json({message: `dane dane pobrane`})
});

app.po



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect("mongodb+srv://pp5Admin:4vYYQA3c8QMakGMH@pp5db.zq4iw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=pp5db")
.then(() =>{
  console.log("connected to database...")
}).catch(() => {
  console.log("not connected to db")
})