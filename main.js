// Random Background Option
let backgroundOption = true;


// // switch Random Background Option

let randomBackgrounds = document.querySelectorAll(".random-background span");


// Select The Landing Page
let landingPage = document.querySelector(".landing-page");

// Make An Array Of The Images
let images = [
  "Dr shimaa Hany1.jpg",
  "dog3.jpg",
  "cat3.jpg",
  "Dr shimaa Hany.jpg",
  "logo1.jpg",
];

// Background Randomize Function
function randomizeBackground() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * images.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("../Home/' + images[randomNumber] + '")';
    }, 2500);
  }
}

randomizeBackground();

document.body.scroll = 0;

// Nav Bar
let menu = document.querySelector(".hamburger");
let sideBar = document.querySelector("#side_bar");

document.onclick = function (e) {
  if (e.target.id !== "side_bar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sideBar.classList.remove("active");
  }
};

menu.onclick = function () {
  menu.classList.toggle("active");
  sideBar.classList.toggle("active");
};

// Dark Mode Option
function DarkModeOption() {
  let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark") {
    body.classList.add("dark");
    aboutBg.classList.add("dark");
    aboutHeader.classList.add("dark");
    aboutLine.classList.add("dark");
    cvHeader.classList.add("dark");
    headerText.classList.add("dark");
    infoTitle.classList.add("dark");
    infoTitle2.classList.add("dark");
    infoTitle3.classList.add("dark");
    header.classList.add("dark");
    activeLink.classList.add("dark");
    navLinks.forEach((a) => {
      hamburger.forEach((line) => {
        line.classList.add("dark");
       a.classList.add("dark")
      });
    });
    sideBar.classList.toggle("dark");
  } else if (getMode && getMode === "light"){
    sideBar.classList.add("light");
  }
}
  
const body = document.querySelector("body");
const checkBox = document.getElementById("checkbox");
const aboutBg = document.querySelector(".about-bg");
const aboutHeader = document.querySelector(".about-header h3");
const aboutLine = document.querySelector(".about-header div");
const cvHeader = document.querySelector(".cv .header");
const headerText = document.querySelector(".header-text");
const infoTitle = document.querySelector(".info .title1 h3");
const infoTitle2 = document.querySelector(".info .title2 h3");
const infoTitle3 = document.querySelector(".skills .title2 h3");
const header = document.querySelector("header");
const hamburger = document.querySelectorAll(".hamburger div");
const activeLink = document.querySelector("nav ul li a.active");
const navLinks = document.querySelectorAll("ul li a");

checkBox.addEventListener("change", () => {
  body.classList.toggle("dark");
  aboutBg.classList.toggle("dark");
  aboutHeader.classList.toggle("dark");
  aboutLine.classList.toggle("dark");
  cvHeader.classList.toggle("dark");
  headerText.classList.toggle("dark");
  infoTitle.classList.toggle("dark");
  infoTitle2.classList.toggle("dark");
  infoTitle3.classList.toggle("dark");
  header.classList.toggle("dark");
  activeLink.classList.toggle("dark");
  navLinks.forEach((a) => {
    a.classList.toggle("dark");
    hamburger.forEach((line) => {
      line.classList.toggle("dark");
sideBar.classList.toggle("dark")

      if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light");
      }
      localStorage.setItem("mode", "dark");
    });
  
   });
});


DarkModeOption();
