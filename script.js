const d = document;

d.addEventListener("click", e => {
  if (e.target.matches(".circle")) {
    e.target.classList.toggle("fund");
  }
})