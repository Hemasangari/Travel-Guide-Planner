// Handle the dropdown selection
document.getElementById("destination-select").addEventListener("change", function () {
    const selectedDestination = this.value;
    if (selectedDestination) {
        // Redirect to the corresponding page
        const destinationMap = {
            "Japan": "destination1.html",
            "Italy": "destination2.html",
            "New Zealand": "destination3.html",
            "South Africa": "destination4.html",
            "New York": "destination5.html",
        };

        // Redirect if the selected value exists in the map
        if (destinationMap[selectedDestination]) {
            window.location.href = destinationMap[selectedDestination];
        }
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        // Simulate form submission success
        alert("Your message has been successfully submitted!");

        // Clear the form
        this.reset();

        // Show success message
        const successMessage = document.createElement("p");
        successMessage.textContent = "Thank you for your inquiry. We will get back to you soon!";
        successMessage.classList.add("success-message");
        document.getElementById('contact-form').appendChild(successMessage);
    } else {
        // Show error message
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Please fill out all fields.";
        errorMessage.classList.add("error-message");
        document.getElementById('contact-form').appendChild(errorMessage);
    }
});


    document.getElementById('write-review-link').addEventListener('click', function (event) {
        event.preventDefault();
        const reviewFormContainer = document.getElementById('review-form-container');
        reviewFormContainer.classList.toggle('hidden'); // Show or hide the form
    });
    
    document.getElementById('review-form').addEventListener('submit', function (event) {
        event.preventDefault();
    
        const name = document.getElementById('review-name').value.trim();
        const reviewText = document.getElementById('review-text').value.trim();
    
        if (name && reviewText) {
            // Create a new review element dynamically
            const newReview = document.createElement('div');
            newReview.classList.add('review');
            newReview.innerHTML = `<p>"${reviewText}" – <strong>${name}</strong></p>`;
    
            // Append the review to the reviews container
            const reviewsContainer = document.querySelector('.reviews-container');
            reviewsContainer.appendChild(newReview);
    
            // Clear the form and hide the review form
            document.getElementById('review-form').reset();
            document.getElementById('review-form-container').classList.add('hidden');
    
            // Optional: Scroll to the newly added review
            newReview.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Please fill in all fields!");
        }
    });
    