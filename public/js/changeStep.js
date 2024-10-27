let currentStep = 1;

function changeStep(step) {
  const steps = document.querySelectorAll('.form-step');
  const currentFormStep = steps[currentStep - 1];

  // Sprawdzenie walidacji tylko podczas przechodzenia do przodu
  if (step === 1) {
    const requiredFields = currentFormStep.querySelectorAll("input[required], textarea[required], select[required]");

    for (let field of requiredFields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return;
      }
    }
  }

  // Ukrycie bieżącego kroku i pokazanie nowego
  currentFormStep.classList.add('d-none');
  currentStep += step;
  steps[currentStep - 1].classList.remove('d-none');

  // Zarządzanie widocznością przycisków
  document.getElementById('prevBtn').classList.toggle('d-none', currentStep === 1);
  document.getElementById('nextBtn').classList.toggle('d-none', currentStep === steps.length);
  document.getElementById('submitBtn').classList.toggle('d-none', currentStep !== steps.length);
}