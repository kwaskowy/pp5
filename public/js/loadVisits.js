async function loadVisits(){
    document.getElementById('navigationTitle').innerHTML=`Historia wizyt`;
    document.getElementById('navigation').innerHTML=`<button class="btn btn-dark-green" onclick="loadMenu()">Powrót do menu</button>`;

    const response = await fetch('http://localhost:3000/visits', {
        method: 'GET',
      })
    const data = await response.json();

    document.getElementById('content').innerHTML = JSON.stringify(data);
}