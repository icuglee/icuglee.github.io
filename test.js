const parallax_bg = document.querySelector(".parallax_bg");
const menu = document.querySelector(".menu");
const menu_bg = document.querySelector(".menu_bg");
const menu_button = document.querySelector(".menu_button");

window.addEventListener("scroll", () => {
  // Parallax effect for background
  if (!parallax_bg) return;
  const rect = parallax_bg.parentElement.getBoundingClientRect();
  const offset = - (window.innerHeight / 2 - rect.top) * 0.1;
  parallax_bg.style.transform = `translateY(${offset}px)`;

  // Fix menu after scrolling down
  if (window.scrollY > 45) {
    menu.classList.add("fix");
  } else {
    menu.classList.remove("fix");
  }
});

menu_button.addEventListener("click", () => {
  menu_bg.classList.toggle("pressed");
});
