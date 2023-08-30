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

// // Dark Mode Option

// const checkBox = document.getElementById('checkbox')
// const h2 = document.querySelectorAll('h2')
// const h3 = document.querySelectorAll('h3')
// const header = document.querySelector('header')
// const hamburger = document.querySelectorAll('.hamburger div')
// const activeLink = document.querySelector('.active')
// const navLinks = document.querySelectorAll('ul li a')


// checkBox.addEventListener('change', () => {
//   document.body.classList.toggle("dark")
//   h2.forEach(h2 => {
//     h2.classList.toggle('dark')
//   });

// h3.forEach(h3 => {
//   h3.classList.toggle('dark')
// });

// header.classList.toggle('dark')

// hamburger.forEach(line => {
//   line.classList.toggle('dark')
// });

// activeLink.classList.toggle('dark')

// sideBar.classList.toggle("dark")

// navLinks.forEach(a => {
//   a.classList.toggle('dark')
// });

// })

// Dark Mode Option
function DarkModeOption() {
  let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark") {
    body.classList.add("dark");

    h2.forEach((h2 => {
      h2.classList.add("dark")
    }))

    h3.forEach(h3 => {
    h3.classList.add("dark")
   })

    header.classList.add("dark");
    activeLink.classList.add("dark");
    navLinks.forEach((a) => {
      hamburger.forEach((line) => {
        line.classList.add("dark");
       a.classList.toggle("dark")
      });
    });
    sideBar.classList.toggle("dark");
  } 
}

const body = document.querySelector("body");

 const checkBox = document.getElementById('checkbox')
 const h2 = document.querySelectorAll('h2')
 const h3 = document.querySelectorAll('h3')
 const header = document.querySelector('header')
 const hamburger = document.querySelectorAll('.hamburger div')
 const activeLink = document.querySelector('.active')
 const navLinks = document.querySelectorAll('ul li a')


checkBox.addEventListener("change", () => {
  body.classList.toggle("dark");
  header.classList.toggle("dark");



  h2.forEach((h2 => {
    h2.classList.toggle("dark")
  }))

  h3.forEach(h3 => {
  h3.classList.toggle("dark")
 })

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
    })
  
   });
});


DarkModeOption();
