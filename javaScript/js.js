const aboutlink = document.querySelector(".about");
const aboutdropdown = document.querySelector(".about-links");

aboutlink.addEventListener("mouseenter", () => {
  aboutdropdown.classList.add("visible");
});

aboutlink.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!aboutdropdown.matches(":hover")) {
      aboutdropdown.classList.remove("visible");
    }
  }, 200);
});

aboutdropdown.addEventListener("mouseleave", () => {
  aboutdropdown.classList.remove("visible");
});


const movieslink = document.querySelector(".movies");
const moviesdropdown = document.querySelector(".movies-links");

movieslink.addEventListener("mouseenter", () => {
  moviesdropdown.classList.add("visible");
});

movieslink.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!moviesdropdown.matches(":hover")) {
      moviesdropdown.classList.remove("visible");
    }
  }, 200);
});

moviesdropdown.addEventListener("mouseleave", () => {
  moviesdropdown.classList.remove("visible");
});
