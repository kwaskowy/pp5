let forms = [];

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(this);
    
    // Konwersja formData na obiekt, który można łatwiej przechowywać i wyświetlać
    let formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    forms.push(formObject);

    console.log(forms);
});