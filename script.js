// Function to fetch a random dog image from the Dog CEO API
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayError('Failed to fetch dog image.');
        });
}

// Function to display the fetched dog image in the UI
function displayDogImage(imageUrl) {
    const container = document.getElementById('data-container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${imageUrl}" class="card-img-top" alt="Random Dog Image">
        <div class="card-body">
            <h5 class="card-title">Random Dog</h5>
        </div>
    `;
    container.appendChild(card);
}

// Function to display error messages
function displayError(message) {
    const container = document.getElementById('data-container');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('alert', 'alert-danger', 'text-center');
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

// Fetch and display the dog image when the page loads
document.addEventListener('DOMContentLoaded', fetchDogImage);
