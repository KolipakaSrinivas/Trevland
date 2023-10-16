document.querySelector("#menu").addEventListener("click", function () {
  document.body.classList.toggle("open");
});

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", function () {
    document.body.classList.remove("open");
  });
});

window.addEventListener("resize", function () {
  document.body.classList.remove("open");
});

// Define your scroll event function
function onScroll() {
  document.body.classList.remove("open");
}

// Attach a scroll event listener to the window
window.addEventListener("scroll", onScroll);
