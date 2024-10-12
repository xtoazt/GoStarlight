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
document.getElementById('togglePopup').addEventListener('change', function() {
    if (this.checked) {
        // Add fade-in animation class
        document.body.classList.add('fade-in');

        // Wait for the animation to finish before executing the logic
        document.body.addEventListener('animationend', function() {
            let inFrame;

            try {
                inFrame = window !== top;
            } catch (e) {
                inFrame = true;
            }

            if (!inFrame && !navigator.userAgent.includes('Firefox')) {
                const popup = open('about:blank', '_blank');

                const doc = popup.document;
                const iframe = doc.createElement('iframe');
                const style = iframe.style;
                const link = doc.createElement('link');

                const name = localStorage.getItem('name') || 'Google';
                const icon = localStorage.getItem('icon') || '/favicons/google.png';

                doc.title = name;
                link.rel = 'icon';
                link.href = icon;

                iframe.src = location.href;
                style.position = 'fixed';
                style.top = style.bottom = style.left = style.right = 0;
                style.border = style.outline = 'none';
                style.width = style.height = '100%';

                doc.head.appendChild(link);
                doc.body.appendChild(iframe);

                const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://google.com';
                location.replace(pLink);

                const script = doc.createElement('script');
                script.textContent = `
                    window.onbeforeunload = function (event) {
                        const confirmationMessage = 'Leave Site?';
                        (event || window.event).returnValue = confirmationMessage;
                        return confirmationMessage;
                    };
                `;
                doc.head.appendChild(script);
            }
        }, { once: true }); // Ensure the event listener is only called once
    }
});
