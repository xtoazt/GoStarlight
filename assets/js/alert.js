function dismissAlert() {
    const alertOverlay = document.getElementById('alertOverlay');
    alertOverlay.style.animation = 'fadeOut 1s forwards'; // Add fadeOut animation
    setTimeout(function() {
        alertOverlay.style.display = 'none'; // Hide the overlay after animation
    }, 1000); // Match the duration of the fadeOut animation
}