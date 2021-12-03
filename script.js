const panels = document.querySelectorAll(".panel");
const removeClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("mouseover", (e) => {
    removeClasses();
    panel.classList.add("active");
  });
});
// panels.forEach((panel) => {
//   panel.addEventListener("click", (e) => {
//     panel.classList.remove("active");
//   });
// });
