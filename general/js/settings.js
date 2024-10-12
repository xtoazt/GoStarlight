const docTitleInput = document.getElementById('docTitleInput');
const faviconInput = document.getElementById('faviconInput');
const saveTitleFaviconButton = document.getElementById('saveTitleFaviconButton');

document.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('docTitle');
    const savedFavicon = localStorage.getItem('favicon');
    const savedBgColor = localStorage.getItem('bgColor');

    if (savedTitle) {
        document.title = savedTitle;
        docTitleInput.value = savedTitle;
    }

    if (savedFavicon) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = savedFavicon;
        document.head.appendChild(link);
        faviconInput.value = savedFavicon;
    }

    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        document.getElementById('bgColorInput').value = savedBgColor;
    }
});

saveTitleFaviconButton.addEventListener('click', () => {
    const newTitle = docTitleInput.value;
    const newFavicon = faviconInput.value;
    document.title = newTitle;

    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = newFavicon;
    document.head.appendChild(link);

    localStorage.setItem('docTitle', newTitle);
    localStorage.setItem('favicon', newFavicon);
});

const bgColorInput = document.getElementById('bgColorInput');
const saveBgColorButton = document.getElementById('saveBgColorButton');
const resetBgColorButton = document.getElementById('resetBgColorButton');

saveBgColorButton.addEventListener('click', () => {
    const newBgColor = bgColorInput.value;
    document.body.style.backgroundColor = newBgColor;
    localStorage.setItem('bgColor', newBgColor);
});

resetBgColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#171717'; // Reset to default color
    bgColorInput.value = '#f4f4f4'; // Reset input value
    localStorage.removeItem('bgColor'); // Remove from local storage
});

const faviconSelectInput = document.getElementById('faviconSelectInput');
const saveFaviconSelectButton = document.getElementById('saveFaviconSelectButton');

saveFaviconSelectButton.addEventListener('click', () => {
    const selectedFavicon = faviconSelectInput.value;
    if (selectedFavicon) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = selectedFavicon;
        document.head.appendChild(link);

        localStorage.setItem('favicon', selectedFavicon);
        faviconInput.value = selectedFavicon;
    } else {
        alert("Please select a favicon.");
    }
});