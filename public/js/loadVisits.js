let headers = {};
let rows = {};

async function loadVisits() {
  document.getElementById('navigationTitle').innerHTML = `Historia wizyt`;
  document.getElementById('navigation').innerHTML = `<button class="btn btn-dark-green" onclick="loadMenu()">Powrót do menu</button>`;

  try {
    const response = await fetch('http://localhost:3000/animals', { method: 'GET' });
    const data = await response.json();
    const animals = Array.isArray(data) ? data : data.data;

    let sectionHTML = `
      <div class="text-center mb-3">
        <button id="btn-section1" class="btn btn-outline-secondary mx-1" onclick="toggleSection('section1')">Dane zwierzęcia</button>
        <button id="btn-section2" class="btn btn-outline-secondary mx-1" onclick="toggleSection('section2')">Dane właściciela</button>
        <button id="btn-section3" class="btn btn-outline-secondary mx-1" onclick="toggleSection('section3')">Adres i inne</button>
      </div>
    `;

    let tableHTML = sectionHTML + `
<div class="table-responsive w-100 mx-auto">
  <table class="table table-bordered">
    <thead class="thead-dark">
      <tr id="table-header">
        <!-- Nagłówki będą dodawane dynamicznie -->
      </tr>
    </thead>
    <tbody id="table-body">
      <!-- Wiersze tabeli będą dodawane dynamicznie -->
    </tbody>
  </table>
</div>
    `;

    document.getElementById('content').innerHTML = tableHTML;

    // Definicja nagłówków i wierszy dla każdej sekcji
    headers = {
      section1: `
        <th>Imię zwierzęcia</th>
        <th>Gatunek</th>
        <th>Rasa</th>
        <th>Waga</th>
        <th>Data urodzenia</th>`,
      section2: `
        <th>Imię i nazwisko właściciela</th>
        <th>Numer kontaktowy</th>
        <th>E-mail</th>
        <th>Zgoda e-mail</th>`,
      section3: `
        <th>Ulica i numer domu</th>
        <th>Kod pocztowy</th>
        <th>Miejscowość</th>
        <th>Uwagi</th>
        <th>Utworzono</th>`
    };

    rows = {
      section1: animals.map(animalData => `
          <td>${animalData.animal.animalName}</td>
          <td>${animalData.animal.species}</td>
          <td>${animalData.animal.breed}</td>
          <td>${animalData.animal.weight}</td>
          <td>${new Date(animalData.animal.birthdate).toLocaleDateString()}</td>`),
      section2: animals.map(animalData => `
          <td>${animalData.owner.ownerName}</td>
          <td>${animalData.owner.contactNumber}</td>
          <td>${animalData.owner.email}</td>
          <td>${animalData.owner.smsConsent ? "Yes" : "No"}</td>`),
      section3: animals.map(animalData => `
          <td>${animalData.address.street}</td>
          <td>${animalData.address.postalCode}</td>
          <td>${animalData.address.city}</td>
          <td>${animalData.address.additionalNotes}</td>
          <td>${new Date(animalData.createdAt).toLocaleString()}</td>`)
    };

    // Wyświetlenie początkowej tabeli z pustymi nagłówkami i wierszami
    updateTable();
  } catch (error) {
    console.error('Error fetching animal data:', error);
    document.getElementById('content').innerHTML = '<p class="text-danger text-center">Error loading visit history.</p>';
  }
}

function toggleSection(sectionId) {
  const button = document.getElementById(`btn-${sectionId}`);
  
  if (button.classList.contains('btn-dark-green')) {
    button.classList.remove('btn-dark-green');
  } else {
    button.classList.add('btn-dark-green');
  }
  
  updateTable();
}

function updateTable() {
  const header = document.getElementById('table-header');
  const body = document.getElementById('table-body');
  
  // Tworzenie nagłówka na podstawie wybranych sekcji
  let activeHeaders = '';
  let activeRows = Array(rows.section1.length).fill('');

  if (document.getElementById('btn-section1').classList.contains('btn-dark-green')) {
    activeHeaders += headers.section1;
    rows.section1.forEach((row, index) => activeRows[index] += row);
  }
  if (document.getElementById('btn-section2').classList.contains('btn-dark-green')) {
    activeHeaders += headers.section2;
    rows.section2.forEach((row, index) => activeRows[index] += row);
  }
  if (document.getElementById('btn-section3').classList.contains('btn-dark-green')) {
    activeHeaders += headers.section3;
    rows.section3.forEach((row, index) => activeRows[index] += row);
  }

  header.innerHTML = activeHeaders;
  body.innerHTML = activeRows.map(row => `<tr>${row}</tr>`).join('');
}

loadVisits(); // Initial load of visit data
