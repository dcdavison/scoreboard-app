let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homePoints = 0
let guestPoints = 0

//Home Team Functions
function add1PointHome() {
    homePoints += 1
    homeScoreEl.textContent = homePoints
}
function add2PointHome() {
    homePoints += 2
    homeScoreEl.textContent = homePoints
}
function add3PointHome() {
    homePoints += 3
    homeScoreEl.textContent = homePoints
}

//Guest Team Functions
function add1PointGuest() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints
}
function add2PointGuest() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints
}
function add3PointGuest() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints
}

//New Game Function
function newGame() {
    guestPoints = 0
    homePoints = 0
    homeScoreEl.textContent = homePoints
    guestScoreEl.textContent = guestPoints
}