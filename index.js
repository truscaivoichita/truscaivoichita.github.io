const toggle = document.getElementById("themeToggle");
const form = document.getElementById("contactForm");

function clickedImage() {
  alert("Image clicked");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function handleFormSubmit(e) {
  e.preventDefault();

  emailjs
    .send("service_c85al7k", "template_fyzox7a", {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    })
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send message.");
    });
}

function countVisits() {
  let visits = localStorage.getItem("visits");
  if (!visits) {
    visits = 0;
  }
  visits++;
  localStorage.setItem("visits", visits);
  document.getElementById("visits").textContent =
    "You visited this page " + visits + " times.";
}
function initEvents() {
  document.addEventListener("DOMContentLoaded", countVisits);
  toggle.addEventListener("click", toggleTheme);
  form.addEventListener("submit", handleFormSubmit);
}

initEvents();
