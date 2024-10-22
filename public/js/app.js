function loadForm1() {
    document.getElementById('content').innerHTML = `
      <h2>Form 1</h2>
      <form id="form1">
        <div class="mb-3">
          <label for="input1" class="form-label">Input 1</label>
          <input type="text" class="form-control" id="input1" name="input1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="response1"></div>
    `;
  
    document.getElementById('form1').addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetch('/form1', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          document.getElementById('response1').innerText = data.message;
        });
    });
  }
  
  function loadForm2() {
    document.getElementById('content').innerHTML = `
      <h2>Form 2</h2>
      <form id="form2">
        <div class="mb-3">
          <label for="input2" class="form-label">Input 2</label>
          <input type="text" class="form-control" id="input2" name="input2">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="response2"></div>
    `;
  
    document.getElementById('form2').addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetch('/form2', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          document.getElementById('response2').innerText = data.message;
        });
    });
  }
  
  function loadForm3() {
    document.getElementById('content').innerHTML = `
      <h2>Form 3</h2>
      <form id="form3">
        <div class="mb-3">
          <label for="input3" class="form-label">Input 3</label>
          <input type="text" class="form-control" id="input3" name="input3">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="response3"></div>
    `;
  
    document.getElementById('form3').addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetch('/form3', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          document.getElementById('response3').innerText = data.message;
        });
    });
  }
  