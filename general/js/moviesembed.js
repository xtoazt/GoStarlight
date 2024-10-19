     // Get the URL from the query parameter
     const urlParams = new URLSearchParams(window.location.search);
     const detailUrl = urlParams.get('url');
     document.getElementById('iframe').src = detailUrl;