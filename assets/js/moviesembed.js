const urlParams = new URLSearchParams(window.location.search);
const tmdbId = urlParams.get('tmdb_id');
const type = urlParams.get('type');
const season = urlParams.get('season');
const episode = urlParams.get('episode');
const mediaFrame = document.getElementById('iframe');

if (type === 'TV Show' && season && episode) {
    mediaFrame.src = `https://vidbinge.dev/embed/tv/${tmdbId}/${season}/${episode}`;
} else {
    mediaFrame.src = `https://vidbinge.dev/embed/movie/${tmdbId}`;
}