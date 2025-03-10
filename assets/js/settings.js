const docTitleInput = document.getElementById('docTitleInput');
const faviconInput = document.getElementById('faviconInput');
const saveTitleFaviconButton = document.getElementById('saveTitleFaviconButton');
const faviconSelectInput = document.getElementById('faviconSelectInput');
const saveFaviconSelectButton = document.getElementById('saveFaviconSelectButton');
const gradientSelector = document.getElementById('gradientSelector');
const resetButton = document.getElementById('resetButton');

function onDocumentLoad() {
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

    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');
    const savedCloakTitle = localStorage.getItem('cloakTitle');
    const savedLogoUrl = localStorage.getItem('logoUrl');
    const popupEnabled = localStorage.getItem('popupEnabled') === 'true';

    if (savedPanicKey) {
        document.getElementById('panicKey').value = savedPanicKey;
    }
    if (savedPanicUrl) {
        document.getElementById('panicUrl').value = savedPanicUrl;
    }
    if (savedCloakTitle) {
        document.getElementById('title').value = savedCloakTitle;
        window.top.document.title = savedCloakTitle;
    }
    if (savedLogoUrl) {
        document.getElementById('logoUrl').value = savedLogoUrl;
        document.querySelector('link[rel="shortcut icon"]').href = savedLogoUrl;
    }

    const savedGradient = localStorage.getItem('backgroundGradient');
    if (savedGradient) {
        document.body.style.background = savedGradient;
        gradientSelector.value = savedGradient;
    } else {
        const defaultGradient = 'linear-gradient(to right, #ffffff, #f0f0f0)';
        document.body.style.background = defaultGradient;
    }
}

function onSaveTitleFavicon() {
    const newTitle = docTitleInput.value;
    const newFavicon = faviconInput.value;
    document.title = newTitle;

    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = newFavicon;
    document.head.appendChild(link);

    localStorage.setItem('docTitle', newTitle);
    localStorage.setItem('favicon', newFavicon);
}

function onSaveFaviconSelect() {
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
}

function onPopupToggleChange() {
    const popupEnabled = this.checked;
    localStorage.setItem('popupEnabled', popupEnabled);
}

function onGradientChange() {
    const selectedGradient = gradientSelector.value;
    document.body.style.background = selectedGradient;
    localStorage.setItem('backgroundGradient', selectedGradient);
}

function onResetButtonClick() {
    const defaultGradient = 'linear-gradient(to right, #ffffff, #f0f0f0)';
    document.body.style.background = defaultGradient;
    localStorage.removeItem('backgroundGradient');
    gradientSelector.selectedIndex = -1;
}

// Attach `onclick` handlers and other event handlers
saveTitleFaviconButton.onclick = onSaveTitleFavicon;
saveFaviconSelectButton.onclick = onSaveFaviconSelect;
document.getElementById('popupToggle').onclick = onPopupToggleChange;
gradientSelector.onclick = onGradientChange;
resetButton.onclick = onResetButtonClick;

// Load settings on document load
window.onload = onDocumentLoad;
