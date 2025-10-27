document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".md-main__inner");
  let current = null;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5 && rect.bottom > 100)
      current = sec;
    sec.classList.remove("is-active");
  });
  if (current) current.classList.add("is-active");
});
