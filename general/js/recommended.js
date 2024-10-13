   // List of images with name, image source, and URL
   const images = [
    { name: "1", image: "/img/imgs/imgs/1.png", url: "/misc/games/1/index.html"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/ "},
    { name: "default", image: "/img/imgs/imgs/ ", url: "/misc/games/"},
];

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Select 7 random images
const selectedImages = shuffle(images).slice(0, 7);

// Get the div container
const container = document.getElementById('imageContainer');

// Insert images into the container
selectedImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.image;
    imgElement.alt = image.name;

    // Set up the link
    const linkElement = document.createElement('a');
    linkElement.href = image.url;
    linkElement.appendChild(imgElement);

    // Add event listener to handle click events
    imgElement.addEventListener('mousedown', (event) => {
        event.preventDefault(); // Prevent default behavior (e.g., dragging)
        imgElement.style.zIndex = 2; // Bring the clicked image to the front
    });

    imgElement.addEventListener('mouseup', () => {
        imgElement.style.zIndex = 1; // Reset zIndex when mouse is released
    });

    container.appendChild(linkElement);
});