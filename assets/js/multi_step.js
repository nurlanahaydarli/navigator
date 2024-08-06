document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 0;
    const formSteps = document.querySelectorAll('.form-step');
    const nextStepButtons = document.querySelectorAll('.next-step');
    const prevStepButtons = document.querySelectorAll('.prev-step');

    formSteps[currentStep].classList.add('active');

    nextStepButtons.forEach(button => {
        button.addEventListener('click', () => {
            formSteps[currentStep].classList.remove('active');
            currentStep++;
            formSteps[currentStep].classList.add('active');
        });
    });

    prevStepButtons.forEach(button => {
        button.addEventListener('click', () => {
            formSteps[currentStep].classList.remove('active');
            currentStep--;
            formSteps[currentStep].classList.add('active');
        });
    });

    document.getElementById('multiStepForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted!');
        // Add form submission logic here
    });
});