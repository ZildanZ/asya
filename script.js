document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".container");
  sections.forEach((sec, i) => {
    setTimeout(() => {
      sec.style.animationDelay = `${i * 0.3}s`;
      sec.classList.add("appear");
    }, i * 300);
  });
});
