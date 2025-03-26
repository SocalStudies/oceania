let countries = [];
let currentCountry;
let score = 0;
let time = 0;
let timerInterval;
let isGameActive = false;

// Load country data and flag images
fetch('countries.json')
    .then(response => response.json())
    .then(data => {
        countries = data;
        renderMap(); // Render map as soon as countries data is loaded
    });

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('play-again-button').addEventListener('click', startGame);

function startGame() {
    if (!isGameActive) {
        isGameActive = true;
        score = 0;
        time = 0;
        document.getElementById('score').textContent = score;
        document.getElementById('timer').textContent = time;
        
        // Show/hide buttons
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('restart-button').style.display = 'inline-block';
        document.getElementById('play-again-button').style.display = 'none';
        
        // Start timer
        timerInterval = setInterval(() => {
            time++;
            document.getElementById('timer').textContent = time;
        }, 1000);

        selectRandomCountry();
    }
}

function restartGame() {
    // Restart the game
    score = 0;
    time = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = time;
    
    clearInterval(timerInterval);
    startGame();
}

function playAgain() {
    // Show the play again button and reset score
    score = 0;
    time = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = time;
    
    selectRandomCountry();
}

function selectRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIndex];

    // Display flag and name
    document.getElementById("flag").src = currentCountry.flag;
    document.getElementById("country-name").textContent = currentCountry.name;
}

function checkAnswer(countryName) {
    if (countryName === currentCountry.name) {
        score++;
        document.getElementById("score").textContent = score;
        selectRandomCountry();
    }
}

// Render map and make countries clickable
function renderMap() {
    let map = document.getElementById("map");
    map.innerHTML = ''; // Clear any previous map rendering
    
    countries.forEach(country => {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", country.x);
        circle.setAttribute("cy", country.y);
        circle.setAttribute("r", "8"); // Slightly larger clickable circles
        circle.addEventListener("click", () => checkAnswer(country.name));
        map.appendChild(circle);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderMap();
});
