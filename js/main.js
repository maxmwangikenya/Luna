let ourSkills = document.querySelector(".ourSkills");
let progress = document.querySelectorAll(".skill .progress span");

let skillNum = document.querySelectorAll(".skills .skill .skill-num");
let started = false;

let ourAwesomeStats = document.querySelector(".ourAwesomeStats");
let statsNum = document.querySelectorAll(".container .box .number");
let statsisStarted = false;

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop - 100) {
        progress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
    if (window.scrollY >= ourSkills.offsetTop - 100) {
        if (!started) {
            skillNum.forEach((n) => startCount(n));
        }
        started = true;
    };
    if (window.scrollY >= ourAwesomeStats.offsetTop - 100) {
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
        if (el.textContent == skillGoal) {
            clearInterval(count);
        }
    }, 600 / skillGoal);
}

function startCountStats(el) {
    let skillGoal = el.dataset.stnum;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == skillGoal) {
            clearInterval(count);
        }
    }, 2000 / skillGoal);
}

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("span.currentYear").innerHTML = currentYear;

let countDownDate = new Date("Sep 30, 2025 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    if (dateDiff > 0) {
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
// script.js
document.getElementById("discount-form").addEventListener("send", async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const result = document.getElementById("result");
    result.textContent = "Sending...";
  
    // Collect form data
    const formData = new FormData(this);
    formData.append("access_key", "e4041116-6f60-488d-8051-993f6f3db31e"); // Your Web3Forms API Key
  
    try {
      // Send the form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      // Parse the JSON response
      const data = await response.json();
  
      // Check if the submission was successful
      if (data.success) {
        result.textContent = "Form Submitted Successfully!";
        result.classList.remove("error");
        result.classList.add("success");
        this.reset(); // Reset the form
      } else {
        result.textContent = data.message || "An error occurred. Please try again later.";
        result.classList.remove("success");
        result.classList.add("error");
      }
    } catch (error) {
      result.textContent = "An error occurred. Please check your connection.";
      result.classList.remove("success");
      result.classList.add("error");
      console.error("Error:", error);
    }
  });
  