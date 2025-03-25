// Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme Colors
const colorThemes = document.querySelectorAll(".colors span");
colorThemes.forEach((color) => {
  color.addEventListener("click", (e) => {
    e.preventDefault();
    let col = getComputedStyle(color).backgroundColor;
    document.documentElement.style.setProperty("--skin-color", `${col}`);
    console.log(col);
    // Remove existing color class
    // document.body.className = document.body.className
    //   .replace(/color-\d+/g, "")
    //   .trim();
    // // Add new color class
    // document.body.classList.add(className);
    // Save to localStorage
    // localStorage.setItem("color", className);
  });
});

// Check for saved color theme
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("color");
  if (savedColor) {
    // Remove existing color class
    document.body.className = document.body.className
      .replace(/color-\d+/g, "")
      .trim();
    // Add saved color class
    document.body.classList.add(savedColor);
  } else {
    // Default color
    document.body.classList.add("color-1");
  }
});

// Theme Light and Dark Mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Save theme preference to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Check for saved theme preference
window.addEventListener("load", () => {
  // Check for saved theme
  const savedTheme = localStorage.getItem("theme");

  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
