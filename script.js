let score = 0;
let timeLeft = 60;
let targetCountry = "";
let countries = {};

fetch('countries.json')
    .then(response => response.json())
    .then(data => {
        countries = data;
        generateMap();
        pickCountry();
        startTimer();
    });

function generateMap() {
    const svg = document.getElementById("map");
    for (let country in countries) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", countries[country].x);
        circle.setAttribute("cy", countries[country].y);
        circle.setAttribute("r", 20);
        circle.setAttribute("class", "country");
        circle.setAttribute("data-name", country);
        circle.addEventListener("click", checkAnswer);
        svg.appendChild(circle);
    }
}

function pickCountry() {
    let keys = Object.keys(countries);
    targetCountry = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById("flag").src = countries[targetCountry].flag;
}

function checkAnswer(event) {
    if (event.target.getAttribute("data-name") === targetCountry) {
        event.target.setAttribute("class", "correct");
        score++;
        document.getElementById("score").innerText = score;
    } else {
        event.target.setAttribute("class", "incorrect");
    }
    pickCountry();
}

function startTimer() {
    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! Your final score: " + score);
        }
    }, 1000);
}
