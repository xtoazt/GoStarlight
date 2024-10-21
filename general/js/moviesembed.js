   // Function to get URL parameters
   function getUrlParameter(name) {
     const urlParams = new URLSearchParams(window.location.search);
     return urlParams.get(name);
 }

 // Set the iframe src based on the URL parameter
 const url = getUrlParameter('url');
 if (url) {
     const iframe = document.getElementById('iframe');
     iframe.src = url;
 } else {
     document.body.innerHTML += '<p>No video available.</p>';
 }