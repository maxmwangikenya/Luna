
let ourSkills = document.querySelector(".ourSkills");
let progress = document.querySelectorAll(".skill .progress span");
window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop) {
        progress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}