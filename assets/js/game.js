

   const shareButton = document.getElementById('share-button');
    const notification = document.getElementById('notification');
    const linkText = document.getElementById('link-text');
    const copyButton = document.getElementById('copy-button');

    shareButton.addEventListener('click', () => {
        const currentUrl = window.location.href;

        if (notification.classList.contains('show')) {
            // Fade out the notification
            notification.classList.remove('show');
            setTimeout(() => {
                notification.style.display = 'none'; // Hide after fade out
            }, 500); // Match the duration of the fade-out animation
        } else {
            linkText.textContent = currentUrl;
            notification.style.display = 'block'; // Show the notification
            setTimeout(() => {
                notification.classList.add('show'); // Fade in
            }, 10); // Small timeout to ensure display is set first
        }
    });

    copyButton.addEventListener('click', () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl);
    });



    function toggleFullscreen() {
        let elem = document.querySelector("iframe");
      
        if (!document.fullscreenElement) {
          elem.requestFullscreen().catch((err) => {
            alert(
              `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
            );
          });
        } else {
          document.exitFullscreen();
        }
      }
    
    
      function refreshIframe() {
        var ifr = document.getElementsByName('iframe')[0];
        ifr.src = ifr.src;
    }

    document.getElementById('opendirect').addEventListener('click', () => {
      const iframe = document.getElementById('iframe');
      const currentUrl = iframe.src; // Get the current URL of the iframe
      window.location.href = currentUrl; // Redirect the entire page to that URL
  });