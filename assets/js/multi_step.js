document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 0;
    const formSteps = document.querySelectorAll('.form-step');
    const nextStepButtons = document.querySelectorAll('.next-step');
    const prevStepButtons = document.querySelectorAll('.prev-step');
    const stepListItems = document.querySelectorAll('.form_step_list ul li');

    formSteps[currentStep].classList.add('active');
    stepListItems[currentStep].classList.add('active');

    function updateStep(newStep) {
        formSteps[currentStep].classList.remove('active');
        stepListItems[currentStep].classList.remove('active');

        currentStep = newStep;

        formSteps[currentStep].classList.add('active');
        stepListItems[currentStep].classList.add('active');
    }

    nextStepButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < formSteps.length - 1) {
                updateStep(currentStep + 1);
            }
        });
    });

    prevStepButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                updateStep(currentStep - 1);
            }
        });
    });

    document.getElementById('multiStepForm').addEventListener('submit', function (e) {
        e.preventDefault();
        // Add form submission logic here
    });
});