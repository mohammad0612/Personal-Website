function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


var typed = new Typed("#text", {
  strings: ["AI/ML Researcher", "Software Engineer Intern", "Full Stack Developer"],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 1000,
  loop: true
}) 