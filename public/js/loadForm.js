function loadForm() {
    document.getElementById('navigationTitle').innerHTML=`Rejestracja`;
    document.getElementById('navigation').innerHTML=`<button class="btn btn-dark-green" onclick="loadMenu()">Powrót do menu</button>`;
  
    document.getElementById('content').innerHTML = `
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-4 text-center"></h2>
        <form id="multiStepForm" class="text-start">
          <!-- Krok 1: Dane zwierzęcia -->
          <div id="step1" class="form-step">
            <h3>Dane zwierzęcia</h3>
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
          </div>
          
          <!-- Krok 2: Dane kontaktowe właściciela -->
          <div id="step2" class="form-step d-none">
            <h3>Dane kontaktowe właściciela</h3>
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
              <label class="form-label">Czy właściciel zgadza się na otrzymywanie powiadomień e-mail?</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="smsConsent" id="smsYes" value="yes" checked>
                <label class="form-check-label" for="smsYes">Tak</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="smsConsent" id="smsNo" value="no">
                <label class="form-check-label" for="smsNo">Nie</label>
              </div>
            </div>
          </div>
          
          <!-- Krok 3: Dane adresowe właściciela -->
          <div id="step3" class="form-step d-none">
            <h3>Dane adresowe właściciela</h3>
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
              <label for="country" class="form-label">Dodatkowe uwagi</label>
              <textarea type="text" class="form-control" id="country" name="country"></textarea>
            </div>
          </div>
          
          <!-- Nawigacja: Wstecz, Dalej, Zakończ -->
          <div class="text-center mt-4">
            <button type="button" id="prevBtn" onclick="changeStep(-1)" class="btn btn-dark-green d-none">Wstecz</button>
            <button type="button" id="nextBtn" onclick="changeStep(1)" class="btn btn-dark-green">Dalej</button>
            <button type="submit" id="submitBtn" class="btn btn-dark-green d-none">Zakończ</button>
          </div>
        </form>
        <div id="response" class="mt-4"></div>
      </div>
    </div>
  </div>`;
  
    // Obsługa wysyłania formularza
    document.getElementById('multiStepForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log("Zawartość formularza:");
    for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
    animaljson = {
      animal: {
          animalName: formData.get('animalName'),
          species: formData.get('species'),
          breed: formData.get('breed'),
          weight: parseFloat(formData.get('weight')), // Convert weight to float
          birthdate: formData.get('birthdate')
      },
      owner: {
          ownerName: formData.get('ownerName'),
          contactNumber: formData.get('contactNumber'),
          email: formData.get('email'),
          smsConsent: formData.get('smsConsent') === 'yes' // Convert to boolean
      },
      address: {
          street: formData.get('address'),
          postalCode: formData.get('postalCode'),
          city: formData.get('city'),
          additionalNotes: formData.get('country') // Assuming 'country' contains additional notes
      }
  };
  console.log(animaljson)
  }
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Dodaj nagłówek informujący o formacie JSON
    },
    body: JSON.stringify(animaljson) // Konwersja obiektu na JSON
  })
        .then(response => response.json())
        .then(data => {
          document.getElementById('response').innerText = data.message;
        })
        .catch(error => {
          document.getElementById('response').innerText = 'Wystąpił błąd podczas zapisu danych.';
        });
    });
  }