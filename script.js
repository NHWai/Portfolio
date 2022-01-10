"use strict";
const setBtn = document.querySelector(".setting");
const navList = document.querySelector(".navlist");
const navEl = document.querySelectorAll(".navEl");
const wsDesc = document.querySelector(".ws-description");
const proBtn = document.querySelectorAll(".proj");
const project = document.querySelector("#projects");
const text =
  "Hello! I am Naing Htet Wai. Creative freelancer and Front-End Developer who focuses on writing clean code. I love love HTML, CSS and JavaScript. ";
const modal = document.querySelector(".modal");
const myql = window.matchMedia("(max-width: 600px)");
let idx = 1;

console.log(proBtn);
underSixPx(myql);
myql.addListener(underSixPx);
autoText();
btnClick(proBtn);

setBtn.addEventListener("click", () => {
  setBtn.classList.toggle("open");
  modal.classList.toggle("hidden");
});

navEl.forEach((e) =>
  e.addEventListener("click", function () {
    navEl.forEach((e) => e.classList.remove("current"));
    this.classList.add("current");
    modal.classList.add("hidden");
    setBtn.classList.toggle("open");
  })
);

//Adding Effect due to window size changes
function underSixPx(x) {
  if (x.matches) {
    setBtn.classList.remove("hidden");
    setBtn.classList.remove("open");
    navList.classList.add("hidden");
  } else {
    setBtn.classList.add("hidden");
    navList.classList.remove("hidden");
    modal.classList.add("hidden");
  }
}

//Buttons to click
function btnClick(btn) {
  btn.forEach((e) => {
    e.addEventListener("click", function () {
      scroLL(project);
    });
  });
}

//Scroll to desired element
function scroLL(el) {
  const elCoord = el.getBoundingClientRect();

  window.scrollTo({
    left: elCoord.left + window.pageXOffset,
    top: elCoord.top + window.pageYOffset - 70,
    behavior: "smooth",
  });
}

//Auto Text Effect
function autoText() {
  wsDesc.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) return;
  setTimeout(autoText, 50);
}
