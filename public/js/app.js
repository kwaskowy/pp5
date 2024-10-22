// Formularz 1: Dane zwierzęcia
function loadForm1() {
  document.getElementById('content').innerHTML = `
    <h2 class="mb-4">Dane zwierzęcia</h2>
    <form id="form1">
      <div class="mb-3">
        <label for="animalName" class="form-label">Imię zwierzęcia</label>
        <input type="text" class="form-control" id="animalName" name="animalName" placeholder="Wpisz imię zwierzęcia" required>
      </div>
      <div class="mb-3">
        <label for="species" class="form-label">Gatunek</label>
        <input type="text" class="form-control" id="species" name="species" placeholder="Np. Pies, Kot" required>
      </div>
      <div class="mb-3">
        <label for="breed" class="form-label">Rasa</label>
        <input type="text" class="form-control" id="breed" name="breed" placeholder="Wpisz rasę" required>
      </div>
      <div class="mb-3">
        <label for="weight" class="form-label">Waga (kg)</label>
        <input type="number" class="form-control" id="weight" name="weight" placeholder="Podaj wagę zwierzęcia" step="0.1" required>
      </div>
      <div class="mb-3">
        <label for="birthdate" class="form-label">Data urodzenia</label>
        <input type="date" class="form-control" id="birthdate" name="birthdate" required>
      </div>
      <button type="submit" class="btn btn-primary">Zapisz dane</button>
    </form>
    <div id="response1" class="mt-4"></div>
  `;

  document.getElementById('form1').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('http://localhost:3000/form1', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('response1').innerText = data.message;
      })
      .catch(error => {
        document.getElementById('response1').innerText = 'Wystąpił błąd podczas zapisu danych.';
      });
  });
}

// Formularz 2: Dane kontaktowe właściciela
function loadForm2() {
  document.getElementById('content').innerHTML = `
    <h2 class="mb-4">Dane kontaktowe właściciela</h2>
    <form id="form2">
      <div class="mb-3">
        <label for="ownerName" class="form-label">Imię i nazwisko właściciela</label>
        <input type="text" class="form-control" id="ownerName" name="ownerName" placeholder="Wpisz imię i nazwisko właściciela" required>
      </div>
      <div class="mb-3">
        <label for="contactNumber" class="form-label">Numer kontaktowy</label>
        <input type="tel" class="form-control" id="contactNumber" name="contactNumber" placeholder="Podaj numer telefonu" pattern="[0-9]{9}" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Adres e-mail</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Wpisz adres e-mail" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Czy właściciel zgadza się na otrzymywanie powiadomień SMS?</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="smsConsent" id="smsYes" value="yes" checked>
          <label class="form-check-label" for="smsYes">Tak</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="smsConsent" id="smsNo" value="no">
          <label class="form-check-label" for="smsNo">Nie</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="notes" class="form-label">Dodatkowe uwagi</label>
        <textarea class="form-control" id="notes" name="notes" rows="3" placeholder="Wpisz uwagi"></textarea>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="termsCheck" required>
        <label class="form-check-label" for="termsCheck">Akceptuję regulamin</label>
      </div>
      <button type="submit" class="btn btn-primary">Zapisz dane</button>
    </form>
    <div id="response2" class="mt-4"></div>
  `;

  document.getElementById('form2').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('http://localhost:3000/form2', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('response2').innerText = data.message;
      })
      .catch(error => {
        document.getElementById('response2').innerText = 'Wystąpił błąd podczas zapisu danych.';
      });
  });
}

  
// Formularz 3: Dane adresowe właściciela
function loadForm3() {
  document.getElementById('content').innerHTML = `
    <h2 class="mb-4">Dane adresowe właściciela</h2>
    <form id="form3">
      <div class="mb-3">
        <label for="address" class="form-label">Adres</label>
        <input type="text" class="form-control" id="address" name="address" placeholder="Wpisz ulicę i numer domu" required>
      </div>
      <div class="mb-3">
        <label for="postalCode" class="form-label">Kod pocztowy</label>
        <input type="text" class="form-control" id="postalCode" name="postalCode" placeholder="00-000" pattern="[0-9]{2}-[0-9]{3}" required>
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">Miejscowość</label>
        <input type="text" class="form-control" id="city" name="city" placeholder="Wpisz miejscowość" required>
      </div>
      <div class="mb-3">
        <label for="country" class="form-label">Kraj</label>
        <input type="text" class="form-control" id="country" name="country" placeholder="Wpisz kraj" required>
      </div>
      <button type="submit" class="btn btn-primary">Zapisz dane</button>
    </form>
    <div id="response3" class="mt-4"></div>
  `;

  document.getElementById('form3').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('http://localhost:3000/form3', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('response3').innerText = data.message;
      })
      .catch(error => {
        document.getElementById('response3').innerText = 'Wystąpił błąd podczas zapisu danych.';
      });
  });
}
