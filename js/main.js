
let ourSkills = document.querySelector(".ourSkills");
let progress = document.querySelectorAll(".skill .progress span");

let skillNum = document.querySelectorAll(".skills .skill .skill-num");
let started = false;

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