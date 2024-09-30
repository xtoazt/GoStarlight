function addLink() {
    const linkInput = document.getElementById('link-input');
    const linkList = document.getElementById('link-list');
    let link = linkInput.value.trim();

    // Automatically add https:// if not present
    if (link && !/^https?:\/\//i.test(link)) {
        link = 'https://' + link;
    }

    if (link) {
        // Create a new list item for the link
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.textContent = link;
        linkElement.target = '_blank'; // Open in a new tab
        linkElement.style.textDecoration = 'none';
        listItem.appendChild(linkElement);
        linkList.appendChild(listItem);

        // Save link to local storage
        saveLink(link);

        // Clear the input field
        linkInput.value = '';
    } else {
        alert("Please enter a valid link.");
    }
}

function saveLink(link) {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.push(link);
    localStorage.setItem('links', JSON.stringify(links));
    displayLinks();
}

function displayLinks() {
    const linkList = document.getElementById('link-list');
    linkList.innerHTML = ''; // Clear the list before displaying
    const links = JSON.parse(localStorage.getItem('links')) || [];
    links.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.textContent = link;
        linkElement.target = '_blank'; // Open in a new tab
        linkElement.style.textDecoration = 'none';
        listItem.appendChild(linkElement);
        linkList.appendChild(listItem);
    });
}

// Load saved links on page load
window.onload = displayLinks;