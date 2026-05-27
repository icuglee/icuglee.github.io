const parallax_bg = document.querySelector(".parallax_bg");
const menu_outer = document.querySelector(".menu_outer");
const menu_inner = document.querySelector(".menu_inner");

window.addEventListener("scroll", () => {
  // Parallax effect for background
  if (!parallax_bg) return;
  const rect = parallax_bg.parentElement.getBoundingClientRect();
  const offset = - (window.innerHeight / 2 - rect.top) * 0.1;
  parallax_bg.style.transform = `translateY(${offset}px)`;

  // Fix menu after scrolling down
  if (window.scrollY > 45) {
    menu_outer.classList.add("fix");
    menu_inner.classList.add("fix");
  } else {
    menu_outer.classList.remove("fix");
    menu_inner.classList.remove("fix");
  }
});



