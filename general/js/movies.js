const apiKey = '1070730380f5fee0d87cf0382670b255'; // Replace with your TMDB API key

async function searchMovies() {
    const query = document.getElementById('search').value;
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    displayMovies(data.results);
}

function displayMovies(results) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        movieList.innerHTML = '<p>No movies or series found.</p>';
        return;
    }

    results.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        movieDiv.innerHTML = `
            <a href="#" onclick="loadDetail('${item.media_type}')">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title || item.name}">
                <h4 class="description">${item.title || item.name} (${new Date(item.release_date || item.first_air_date).getFullYear()})</h4>
            </a>`;
        movieList.appendChild(movieDiv);
    });
}

function loadDetail(mediaType) {
    const baseUrls = {
        movie: "https://vidsrc.rip/embed/movie/",
        tv: "https://vidsrc.rip/embed/tv/"
    };

    const selectedUrl = baseUrls[mediaType] || baseUrls.movie;

    // Redirect to the detail page with the selected URL
    window.location.href = `/storage/movies.html?url=${encodeURIComponent(selectedUrl)}`;
}