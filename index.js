const toggle = document.getElementById("themeToggle");

function clickedImage() {
  alert("Image clicked");
}
function toggleTheme() {
  document.body.classList.toggle("dark");
}
toggle.addEventListener("click", toggleTheme);
