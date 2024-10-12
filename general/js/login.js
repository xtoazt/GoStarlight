
function checkLoginStatus() {
    const username = localStorage.getItem('loggedInUser');
    if (username) {
        loadProfileData(username);
    }
}

function showSignup() {
    document.querySelector('.auth-section').style.display = 'none';
    document.querySelector('.signup-section').style.display = 'block';
    document.getElementById('signup-error').textContent = ''; // Clear previous error
}

function showLogin() {
    document.querySelector('.signup-section').style.display = 'none';
    document.querySelector('.auth-section').style.display = 'block';
}

function signup() {
    const username = document.querySelector('.signup-username').value;
    const password = document.querySelector('.signup-password').value;

    // Check if the username already exists
    if (localStorage.getItem(username)) {
        document.getElementById('signup-error').textContent = 'Cannot create new account. Username already exists.';
        return;
    }

    localStorage.setItem(username, password);
    alert('Signup successful! Please log in.');
    showLogin();
}

function login() {
    const username = document.querySelector('.login-username').value;
    const password = document.querySelector('.login-password').value;

    if (localStorage.getItem(username) === password) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', username); // Save logged-in user
        loadProfileData(username);
    } else {
        alert('Invalid username or password.');
    }
}

function loadProfileData(username) {
    document.querySelector('.auth-section').style.display = 'none';
    document.querySelector('.signup-section').style.display = 'none';
    document.querySelector('.profile-section').style.display = 'block';
    loadProfile();
}

function saveProfile() {
    const name = document.querySelector('.profile-name').value;
    const bio = document.querySelector('.profile-bio').value;
    const currentUser = localStorage.getItem('loggedInUser');

    const profile = {
        name: name,
        bio: bio,
        icon: document.getElementById('profile-icon').src
    };
    
    localStorage.setItem(currentUser + '-profile', JSON.stringify(profile));
    alert('Profile saved!');
}

function loadProfile() {
    const currentUser = localStorage.getItem('loggedInUser');
    const profile = JSON.parse(localStorage.getItem(currentUser + '-profile'));

    if (profile) {
        document.querySelector('.profile-name').value = profile.name;
        document.querySelector('.profile-bio').value = profile.bio;
        document.getElementById('profile-icon').src = profile.icon;
    } else {
        // Clear fields if no profile exists
        document.querySelector('.profile-name').value = '';
        document.querySelector('.profile-bio').value = '';
        document.getElementById('profile-icon').src = 'default-icon.png'; // Reset to default icon
    }
}

function uploadIcon() {
    const file = document.querySelector('.icon-upload').files[0];
    const reader = new FileReader();
    
    reader.onloadend = function () {
        document.getElementById('profile-icon').src = reader.result;
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

function deleteAccount() {
    const currentUser = localStorage.getItem('loggedInUser');
    localStorage.removeItem(currentUser); // Remove the user account
    localStorage.removeItem(currentUser + '-profile'); // Remove the user profile
    alert('Your account has been deleted.');
    resetProfileFields(); // Reset the profile fields to default
    logout(); // Log out after account deletion
}

function resetProfileFields() {
    document.querySelector('.profile-name').value = '';
    document.querySelector('.profile-bio').value = '';
    document.getElementById('profile-icon').src = 'default-icon.png'; // Reset to default icon
}

function logout() {
    localStorage.removeItem('loggedInUser'); // Remove logged-in user
    document.querySelector('.profile-section').style.display = 'none';
    showLogin();
}

// Check login status on page load
window.onload = checkLoginStatus;