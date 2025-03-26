let countries = [];
let currentCountry;
let score = 0;
let time = 0;

// Load country data and flag images
fetch('countries.json')
    .then(response => response.json())
    .then(data => {
        countries = data;
        startGame();
    });

function startGame() {
    setInterval(() => {
        time++;
        document.getElementById("timer").textContent = time;
    }, 1000);

    selectRandomCountry();
}

function selectRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIndex];

    document.getElementById("flag").src = currentCountry.flag;
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
    
    countries.forEach(country => {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", country.x);
        circle.setAttribute("cy", country.y);
        circle.setAttribute("r", "5"); // Smaller circles
        circle.addEventListener("click", () => checkAnswer(country.name));
        map.appendChild(circle);
    });
}

document.addEventListener("DOMContentLoaded", renderMap);
