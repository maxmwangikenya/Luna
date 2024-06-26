
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
document.querySelector("span.currentYear").innerHTML = currentYear;


let countDownDate = new Date("sep 30, 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  if (countDownDate > dateNow) {
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  } else {
    document.querySelector(".days").innerHTML = `00`;
    document.querySelector(".hours").innerHTML = `00`;
    document.querySelector(".minutes").innerHTML = `00`;
    document.querySelector(".seconds").innerHTML = `00`;
  }



  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);