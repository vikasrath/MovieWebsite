const movielink = document.querySelector(".movies");
const dropdown = document.querySelector(".movie-links");

movielink.addEventListener("mouseenter", () => {
  dropdown.classList.add("visible");
});

movielink.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdown.matches(":hover")) {
      dropdown.classList.remove("visible");
    }
  }, 200);
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.classList.remove("visible");
});
