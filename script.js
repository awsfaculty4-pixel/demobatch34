// Grab references to the HTML elements
const button = document.getElementById('actionBtn');
const title = document.getElementById('title');

// Track state
let isClicked = false;

// Add a click event listener to the button
button.addEventListener('click', () => {
    if (!isClicked) {
        title.textContent = "🎉 It Works!";
        title.style.color = "#4ade80"; // Changes text color to green
        button.textContent = "Reset";
        isClicked = true;
    } else {
        title.textContent = "Hello World!";
        title.style.color = "#38bdf8"; // Resets text color to blue
        button.textContent = "Click Me";
        isClicked = false;
    }
});
