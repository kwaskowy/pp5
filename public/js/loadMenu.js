function loadMenu() {
  document.getElementById('navigation').innerHTML=`
      <button class="btn btn-dark-green me-5" onclick="loadForm()">Rejestracja</button>
      <button class="btn btn-dark-green" onclick="loadVisits()">Wizyty</button>`;
  document.getElementById('navigationTitle').innerHTML=`Gabinet weterynaryjny "Łapa"`;
  document.getElementById('content').innerHTML=``;
}


function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
}

// Domyślny motyw
document.body.classList.add('light-theme');

