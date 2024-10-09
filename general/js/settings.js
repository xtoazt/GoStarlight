  // Document Title and Favicon Changer
  const docTitleInput = document.getElementById('docTitle');
  const faviconInput = document.getElementById('favicon');
  const saveTitleFaviconButton = document.getElementById('saveTitleFavicon');

  // Load saved title and favicon from local storage
  document.addEventListener('DOMContentLoaded', () => {
      const savedTitle = localStorage.getItem('docTitle');
      const savedFavicon = localStorage.getItem('favicon');
      const savedPanicKey = localStorage.getItem('panicKey');

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

      // Background Color
      const savedBgColor = localStorage.getItem('bgColor');
      if (savedBgColor) {
          document.body.style.backgroundColor = savedBgColor;
          document.getElementById('bgColor').value = savedBgColor;
      }

      // Panic Key
      if (savedPanicKey) {
          document.getElementById('panicKey').value = savedPanicKey;
          document.addEventListener('keydown', (e) => {
              if (e.key === savedPanicKey) {
                  document.getElementById('panicMessage').style.display = 'block';
                  setTimeout(() => {
                      document.getElementById('panicMessage').style.display = 'none';
                  }, 2000);
              }
          });
      }
  });

  // Save Document Title and Favicon
  saveTitleFaviconButton.addEventListener('click', () => {
      const newTitle = docTitleInput.value;
      const newFavicon = faviconInput.value;
      document.title = newTitle;

      // Update favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = newFavicon;
      document.head.appendChild(link);

      // Save to local storage
      localStorage.setItem('docTitle', newTitle);
      localStorage.setItem('favicon', newFavicon);
  });

  // Background Color Changer
  const bgColorInput = document.getElementById('bgColor');
  const saveBgColorButton = document.getElementById('saveBgColor');

  saveBgColorButton.addEventListener('click', () => {
      const newBgColor = bgColorInput.value;
      document.body.style.backgroundColor = newBgColor;
      localStorage.setItem('bgColor', newBgColor);
  });

  // Favicon Dropdown Changer
  const faviconSelect = document.getElementById('faviconSelect');
  const saveFaviconSelectButton = document.getElementById('saveFaviconSelect');

  saveFaviconSelectButton.addEventListener('click', () => {
      const selectedFavicon = faviconSelect.value;
      if (selectedFavicon) {
          // Update favicon
          const link = document.createElement('link');
          link.rel = 'icon';
          link.href = selectedFavicon;
          document.head.appendChild(link);

          // Save to local storage
          localStorage.setItem('favicon', selectedFavicon);
          faviconInput.value = selectedFavicon; // Update input field
      } else {
          alert("Please select a favicon.");
      }
  });