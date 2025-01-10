// Dropdown functionality
const countrySelect = document.getElementById('country-select');
const countryDetails = document.querySelectorAll('.country-box');

countrySelect.addEventListener('change', function () {
    const selectedCountry = this.value;

    // Hide all country details
    countryDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Show the selected country's details
    const selectedDetail = document.getElementById(selectedCountry);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
});

// Accordion functionality
document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});