function loadMenu() {
  document.getElementById('navigation').innerHTML=`
      <button class="btn btn-dark-green me-5" onclick="loadForm()">Rejestracja</button>
      <button class="btn btn-dark-green" onclick="loadVisits()">Wizyty</button>`;
  document.getElementById('navigationTitle').innerHTML=`Gabinet weterynaryjny "Łapa"`;
  document.getElementById('content').innerHTML=``;
}




