// Navigation menu
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;
const HireMe = document.querySelectorAll(".hire-me");

// Function to remove active class from all sections
function removeBackSectionClass() {
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.remove("active");
  }
}

// Function to add active class to clicked section
function addBackSectionClass(num) {
  allSections[num].classList.add("active");
}

// Navigation to contact section while cliking on hiring button
HireMe.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    removeBackSectionClass();
    addBackSectionClass(4);
  })
);

// Navigation click event
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // Remove active class from all sections
    removeBackSectionClass();

    // Remove active class from all nav items
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    // Add active class to clicked nav item
    this.classList.add("active");

    // Show the corresponding section
    showSection(this);
  });
}

// Function to show the corresponding section
function showSection(element) {
  // Remove active class from all sections
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.remove("active");
  }

  // Get the target section id from the href attribute
  const target = element.getAttribute("href").split("#")[1];

  // Add active class to the target section
  document.querySelector("#" + target).classList.add("active");
}

// Handle responsive navigation
const navTogglerBtn = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".sidebar");

navTogglerBtn.addEventListener("click", () => {
  sidebarToggle();
});

function sidebarToggle() {
  sidebar.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.toggle("open");
  }
}

// Existing code...

// Nav Toggler
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
// const allSections = document.querySelectorAll(".section");

navToggler.addEventListener("click", () => {
  asideToggle();
});

function asideToggle() {
  aside.classList.toggle("open");
  navToggler.classList.toggle("open");
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].classList.toggle("open");
  }
}

// Close aside when clicking outside
document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".aside") &&
    !event.target.closest(".nav-toggler")
  ) {
    if (aside.classList.contains("open")) {
      asideToggle();
    }
  }
});

// Close aside when clicking on a nav item (for mobile)
const navItems = document.querySelectorAll(".nav li a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 1199) {
      asideToggle();
    }
  });
});

// Existing code...
// Preloader
window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 600);
});
