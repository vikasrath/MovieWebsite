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


function smoothScrollWithOffset(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset = 110; // Adjust the offset for fixed header height
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth'
    });
  } else {
    console.error(`Element with ID ${targetId} not found.`);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const url = new URL(href, document.baseURI);
      const targetId = url.hash.substring(1);

      if (url.pathname === window.location.pathname && targetId) {
        e.preventDefault();
        smoothScrollWithOffset(targetId);
      }
    });
  });
});

window.addEventListener('load', function() {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    smoothScrollWithOffset(targetId);
  }
});