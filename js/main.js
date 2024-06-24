
let ourSkills = document.querySelector(".ourSkills");
let progress = document.querySelectorAll(".skill .progress span");

let skillNum = document.querySelectorAll(".skills .skill .skill-num");
let started = false;

let ourAwesomeStats = document.querySelector(".ourAwesomeStats");
let statsNum = document.querySelectorAll(".container .box .number");
let statsisStarted = false;

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop -100) {
        progress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
    if (window.scrollY >= ourSkills.offsetTop -100) {
        if (!started) {
            skillNum.forEach((n) => startCount(n));
        }
        started = true;
    };
    if (window.scrollY >= ourAwesomeStats.offsetTop -100) {
        if (!statsisStarted) {
            statsNum.forEach((n) => startCountStats(n));
        }
        statsisStarted = true;
    };
};

function startCount(el) {
    let skillGoal = el.dataset.num;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent === skillGoal) {
            clearInterval(count)
        }
    },600 / skillGoal)
}

function startCountStats(el) {
    let skillGoal = el.dataset.stnum;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent === skillGoal) {
            clearInterval(count)
        }
    },2000 / skillGoal)
}

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector(".currentYear").innerText = currentYear;