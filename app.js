// document.getElementById("outline-path").addEventListener("animationend", () => {
//   document.getElementById("filled-line").style.opacity = "1";
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.children[1].className += " fade";
    }
  });
});

setTimeout(() => {
  document.querySelectorAll(".chapter").forEach((chapter) => {
    observer.observe(chapter);
  });
}, 1000);
