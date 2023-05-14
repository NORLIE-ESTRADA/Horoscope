"use strict";

const pisces = document.querySelector("#pisces");
const containerfloat = document.querySelector(".float-container");
const back = document.querySelector(".btn-back");
const title = document.querySelector(".title");
const zodiacimg = document.querySelector(".image1");
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const titlesmall = document.querySelector('.title-small');
pisces.addEventListener("click", function () {
  alert(2);
  containerfloat.classList.remove("hide");
  title.textContent = "Pisces";
  zodiacimg.src = `assets/img/img1.png`;
  description.textContent =
    "May 2023 - You’ll feel stable and calm in your mind this month, dear Pisces, thanks to Taurus season and its grounding presence. However, you’ll find that your thoughts are best directed inward, because Mercury’s retrograde motion could lead to miscommunication or stubborn arguments.";
   date.textContent = "Feb 19 - Mar 20";
   titlesmall.textContent = "Pisces";
});
back.addEventListener("click", function () {
  containerfloat.classList.add("hide");
});
