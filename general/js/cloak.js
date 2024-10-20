var urlObj = new window.URL(window.location.href);
var url = window.location;

if (url) {
  var win;

  document.getElementById('openScriptButton').onclick = function() {
    if (win) {
      win.focus();
    } else {
      win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';

      // Set the title and favicon
      win.document.title = "Google";
      var link = win.document.createElement('link');
      link.rel = 'icon';
      link.href = 'https://starlight-phi.vercel.app/img/images/icons/google.ico'; // Google favicon
      win.document.head.appendChild(link);

      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);

      // Redirect the current window to Google
      window.location.replace("https://google.com");

      var interval = setInterval(function() {
        if (win.closed) {
          clearInterval(interval);
          win = undefined;
        }
      }, 500);
    }
  };
}
