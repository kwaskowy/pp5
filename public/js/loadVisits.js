async function loadVisits() {
  // Set the title and navigation content
  document.getElementById('navigationTitle').innerHTML = `Historia wizyt`;
  document.getElementById('navigation').innerHTML = `<button class="btn btn-dark-green" onclick="loadMenu()">Powrót do menu</button>`;

  try {
    // Fetch data from the server
    const response = await fetch('http://localhost:3000/animals', {
      method: 'GET',
    });
    const data = await response.json();

    // Assume `data.data` contains the array of visit histories
    const animals = Array.isArray(data) ? data : data.data;

    // Generate the table with headers
    let tableHTML = `
      <table border="1" class="table">
        <thead>
          <tr>
            <th>Imię zwierzęcia</th>
            <th>Gatunek</th>
            <th>Rasa</th>
            <th>Waga</th>
            <th>Data urodzenia</th>
            <th>Imię i nazwisko właściciela</th>
            <th>Numer kontaktowy</th>
            <th>E-mail</th>
            <th>Zgoda e-mail</th>
            <th>Ulica i numer domu</th>
            <th>Kod pocztowy</th>
            <th>Miejscowość</th>
            <th>Uwagi</th>
            <th>Utworzono</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Populate table rows with data
    animals.forEach(animalData => {
      const { animal, owner, address, _id, createdAt, updatedAt } = animalData;

      tableHTML += `
        <tr>
          <td>${animal.animalName}</td>
          <td>${animal.species}</td>
          <td>${animal.breed}</td>
          <td>${animal.weight}</td>
          <td>${new Date(animal.birthdate).toLocaleDateString()}</td>
          <td>${owner.ownerName}</td>
          <td>${owner.contactNumber}</td>
          <td>${owner.email}</td>
          <td>${owner.smsConsent ? "Yes" : "No"}</td>
          <td>${address.street}</td>
          <td>${address.postalCode}</td>
          <td>${address.city}</td>
          <td>${address.additionalNotes}</td>
          <td>${new Date(createdAt).toLocaleString()}</td>
        </tr>
      `;
    });

    // Close the table
    tableHTML += `
        </tbody>
      </table>
    `;

    // Insert the table HTML into the content div
    document.getElementById('content').innerHTML = tableHTML;

  } catch (error) {
    console.error('Error fetching animal data:', error);
    document.getElementById('content').innerHTML = '<p>Error loading visit history.</p>';
  }
}
