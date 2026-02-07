document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const savedTheme = localStorage.getItem("theme");
  console.log(savedTheme);
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (savedTheme == "dark") {
    document.body.classList.add("dark-mode");
    themeToggleBtn.textContent = "🌕 Change to Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggleBtn.textContent = "🌑 Change to Dark Mode";
  }
});

const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  console.log("Toggling dark mode");

  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "🌕 Change to Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌑 Change to Dark Mode";
  }
});
