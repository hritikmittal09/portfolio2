const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const rootElement = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  rootElement.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle on click
themeToggleBtn.addEventListener("click", () => {
  rootElement.classList.toggle("dark");

  if (rootElement.classList.contains("dark")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});
