const urlParams = new URLSearchParams(window.location.search);
const tmdbId = urlParams.get('tmdb_id');
const type = urlParams.get('type');
const season = urlParams.get('season');
const episode = urlParams.get('episode');
const mediaFrame = document.getElementById('iframe');
const titleElement = document.getElementById('desc-title');
const descriptionElement = document.getElementById('desc-desc');
const creatorElement = document.getElementById('desc-creator');

async function fetchMediaDetails() {
    let detailsResponse;
    if (type === 'TV Show') {
        detailsResponse = await fetch(`https://api.themoviedb.org/3/tv/${tmdbId}?api_key=1070730380f5fee0d87cf0382670b255`);
    } else {
        detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=1070730380f5fee0d87cf0382670b255`);
    }
    
    const detailsData = await detailsResponse.json();
    
    // Set the title
    titleElement.textContent = type === 'TV Show' ? detailsData.name : detailsData.title;

    // Set the description
    descriptionElement.textContent = detailsData.overview;

    // Set the creator for TV Shows
    if (type === 'TV Show') {
        creatorElement.textContent = detailsData.created_by.map(creator => creator.name).join(', ');
    } else {
        creatorElement.textContent = 'N/A'; // Movies do not have creators in the same way
    }
}

if (type === 'TV Show' && season && episode) {
    mediaFrame.src = `https://vidbinge.dev/embed/tv/${tmdbId}/${season}/${episode}`;
} else {
    mediaFrame.src = `https://vidbinge.dev/embed/movie/${tmdbId}`;
}

// Fetch media details after setting the iframe source
fetchMediaDetails();