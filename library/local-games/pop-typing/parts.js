function header_f() {
	var d0 = new Date(), d1 = new Date(2023, 12-1, 25);
	var n='<span style="font-size:11px;color: #333333">12/4</span> ';
	if(d1.getTime()-d0.getTime()>0){ n+='<img src="http://typingx0.net/img/new_w.gif" width="28" height="9" alt=""/>'; }
    var html = "";
	html += '<div id="logo"><a href="https://neutralx0.net/"><img src="http://typingx0.net/img/logo.gif" width="120" height="40" alt=""/></a></div>';
	html += '<div id="header_menu"><ul>';
	html += '<li><p><a href="https://neutralx0.net" style=color:#333>HOME</a></p></li>';
	html += '<li><p><a href="http://typingx0.net/">â˜…ã‚¿ã‚¤ãƒ”ãƒ³ã‚°</a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/room/">â˜…è„±å‡ºã‚²ãƒ¼ãƒ </a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/mini/sakusaku/">â˜…ãƒŸãƒ‹ã‚²ãƒ¼ãƒ </a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/tools/">â˜…Webãƒ„ãƒ¼ãƒ«</a></p></li>';
	html += '<li><p><a href="https://neutralx0.com/" target="_blank" class="topmenu">å®Ÿé¨“å®¤</a></p></li>';
	html += '<li><p><a href="https://youtube.com/@neutralx" target="_blank" class="topmenu">Youtube</a></p></li>';
	html += '<li><p><a href="http://info.neutralx0.com/" target="_blank" class="topmenu">ãƒ˜ãƒ«ãƒ—</a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/info.html" target="_blank" style="font-size:11px;color:#333">æ›´æ–°'+n+'</a></p></li>';
	html += '</ul></div>';
    document.getElementById('header').innerHTML = html;
}

function footer_f(){
	var html = '<div id="page_top"><a href="#top">&#9650;</a></div>';
	html += '<div id="footer_main">';
	html += '<p><a href="https://neutralx0.net/about.html" target="_blank">ã”åˆ©ç”¨è¦ç´„ãƒ»ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼</a></p>';
	html += '<p>&copy; 2005 Neutral.</p>';
	html += '</div>';
	document.getElementById('footer').innerHTML = html;
}

function sns_f(){
    var html = '<ul>';
    //tw
    html +='<li><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a></li>';
	
    html += '</ul>';
    document.getElementById('sns').innerHTML = html;
    
    var e = document.createElement("script");
    e.src = "https://platform.twitter.com/widgets.js";
    e.charset="utf-8";
    document.body.appendChild(e);
    
    e = document.createElement("script");
    e.src = "https://b.st-hatena.com/js/bookmark_button.js";
    e.charset="utf-8";
    e.async="async"
    document.body.appendChild(e);
}