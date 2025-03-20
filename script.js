"use strict";

const clockButton = document.querySelector(".clock-button");

const clock = document.querySelector(".clock");

const clockHeader = document.querySelector(".clock-header");

const dayContainer = document.querySelector(".day-container");

clockButton.addEventListener("click", showClock);

function showClock() {
  clock.classList.toggle("hide");
  clock.classList.add("transition-clock");
  dayContainer.classList.toggle("hide");
  time();
  setInterval(time, 1000);

  if (!clock.classList.contains("hide")) {
    clockHeader.textContent = "hide clock";
  } else {
    clockHeader.textContent = "show clock";
  }
}

//time logic
const sec = document.querySelector(".sec");

const min = document.querySelector(".min");

const hr = document.querySelector(".hr");

const day = document.querySelector(".day");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function time(
  secs = new Date().getSeconds(),
  mins = new Date().getMinutes(),
  hrs = new Date().getHours()
) {
  if (secs < 10) {
    sec.innerText = `: 0${secs}`;
  } else {
    sec.innerText = `: ${secs}`;
  }

  if (mins < 10) {
    min.innerText = `: 0${mins}`;
  } else {
    min.innerText = `: ${mins}`;
  }

  if (hrs < 10) {
    hr.innerText = `0${hrs}`;
  } else {
    hr.innerText = `${hrs}`;
  }

  day.innerText = days[new Date().getDay()];
}
