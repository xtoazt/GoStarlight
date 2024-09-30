window.onload = function() {
    loadProfile();
    document.getElementById('load-input').addEventListener('change', handleFileSelect, false);
};

function updateProfile() {
    const username = document.getElementById('username-input').value.trim();
    const bio = document.getElementById('bio-input').value.trim();
    const pfpInput = document.getElementById('pfp-input').files[0];

    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('username-display').textContent = username;
    }
    if (bio) {
        localStorage.setItem('bio', bio);
        document.getElementById('bio-display').textContent = bio;
    }
    if (pfpInput) {
        const reader = new FileReader();
        reader.onloadend = function() {
            localStorage.setItem('profilePic', reader.result);
            document.getElementById('profile-pic').src = reader.result;
        }
        reader.readAsDataURL(pfpInput);
    }
    saveProfile();
}

function loadProfile() {
    const username = localStorage.getItem('username');
    const bio = localStorage.getItem('bio');
    const profilePic = localStorage.getItem('profilePic');

    if (username) {
        document.getElementById('username-display').textContent = username;
        document.getElementById('username-input').value = username;
    }
    if (bio) {
        document.getElementById('bio-display').textContent = bio;
        document.getElementById('bio-input').value = bio;
    }
    if (profilePic) {
        document.getElementById('profile-pic').src = profilePic;
    }
}

function saveProfile() {
    const profileData = {
        username: localStorage.getItem('username'),
        bio: localStorage.getItem('bio'),
        profilePic: localStorage.getItem('profilePic'),
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
}

function downloadData() {
    const profileData = localStorage.getItem('profileData');
    const blob = new Blob([profileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'profileData.json';
    a.click();
    URL.revokeObjectURL(url);
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = JSON.parse(e.target.result);
            localStorage.setItem('username', data.username);
            localStorage.setItem('bio', data.bio);
            localStorage.setItem('profilePic', data.profilePic);
            loadProfile();
        };
        reader.readAsText(file);
    }
}

function loadData() {
    document.getElementById('load-input').click();
}