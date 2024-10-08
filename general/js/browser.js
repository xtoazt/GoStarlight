const webFrame = document.getElementById('webFrame');
const loadButton = document.getElementById('loadButton');
const reloadButton = document.getElementById('reloadButton');
const openDirectButton = document.getElementById('openDirectButton');
const predefinedUrl = "https://bigpanera.vercel.app"; // Predefined URL

// Load the predefined URL in the iframe
loadButton.addEventListener('click', function() {
    webFrame.classList.add('loading'); // Add loading class
    webFrame.src = predefinedUrl; // Load the predefined URL
    setTimeout(() => webFrame.classList.remove('loading'), 500); // Remove loading class after transition
});

// Reload the current URL
reloadButton.addEventListener('click', function() {
    webFrame.classList.add('loading'); // Add loading class
    webFrame.src = webFrame.src; // Reload the current URL
    setTimeout(() => webFrame.classList.remove('loading'), 500); // Remove loading class after transition
});

// Open the predefined URL in a new tab
openDirectButton.addEventListener('click', function() {
    window.open(predefinedUrl, '_blank'); // Open the predefined URL in a new tab
});