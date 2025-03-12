//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//Scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let logo = document.getElementById("logoMain"); 

// Function to check if the screen width is less than or equal to 585px
const isMobile = () => {
  return window.innerWidth <= 585;
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //Active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

       // If we're on a small screen (max-width: 585px), hide the logo in all sections except Home
       if (isMobile()) {
        if (id === "home") {
          logo.classList.remove("hidden"); // Show logo when on Home
        } else {
          logo.classList.add("hidden"); // Hide logo for other sections
        }
      }
    }
  });

  //Sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //Remove toggle icon and navbar when clicking navbar links (in scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


// Ensure the logo appears when clicking on the "Home" link (only on small screens)
let homeLink = document.querySelector('a[href="#home"]');

homeLink.addEventListener("click", () => {
  if (isMobile()) {
    logo.classList.remove("hidden"); // Show logo when clicking Home link
  }
});

// Ensure the logo appears on page load if we are on the "Home" section (on small screens)
window.addEventListener("load", () => {
  if (isMobile() && window.location.hash === "#home") {
    logo.classList.remove("hidden"); // Show logo on Home section when page loads
  }
});
