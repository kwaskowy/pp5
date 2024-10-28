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
            <th>ID</th>
            <th>Animal Name</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Weight</th>
            <th>Birthdate</th>
            <th>Owner Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>SMS Consent</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>Additional Notes</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Populate table rows with data
    animals.forEach(animalData => {
      const { animal, owner, address, _id, createdAt, updatedAt } = animalData;

      tableHTML += `
        <tr>
          <td>${_id}</td>
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
          <td>${new Date(updatedAt).toLocaleString()}</td>
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
