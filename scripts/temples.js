document.addEventListener("DOMContentLoaded", () => {
  // Year and last modified
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastmodified").textContent = document.lastModified;

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});
});
