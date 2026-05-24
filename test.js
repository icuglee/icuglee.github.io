const parallax_bg = document.querySelector(".parallax_bg");

window.addEventListener("scroll", () => {
  if (!parallax_bg) return;
  const rect = parallax_bg.parentElement.getBoundingClientRect();
  const offset = - (window.innerHeight / 2 - rect.top) * 0.1;
  parallax_bg.style.transform = `translateY(${offset}px)`;
});