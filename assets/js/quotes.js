let splashtext = [
    'Made by Infamy/enterheadlines',
    'Join our discord fr',
    'zoo wee mama',
    'im cool now that i made this site',
    'most basic ubg site ever',
    'Entertopia is ass compared to this',
    'these games are so good',
    'very lightweight site(for now)',
    'this is closed source (for now)',
    'anyone who says this site is ass is lying',
    'tell this site to everyone you know',
    'fein fein fein',
    'ADS OPEN FOR SALE PLEASE BUY',
    'youtube is unblocked for me',
    'you found secret 1',
    'im in the thick of it',
    'everybody knows',
    'they know me where it snows',
    'i skied in and they froze',
    'I dont know no nothing bout no ice im just cold',
    'Forty something milli subs or so, Ive been told',
    'from the screen to the ring to the pen to the king',
    'wheres my crown thats my bling',
    'always drama when i ring'
];

// Function to change text
function changeSplashText() {
    document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)];
}

// Initial call to set the text immediately
changeSplashText();

// Change the text every 5 seconds (5000 milliseconds)
setInterval(changeSplashText, 5000);
