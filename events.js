const pointEl = document.querySelector(".point");
document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowUp") {
    const top = `${pointEl.computedStyleMap().get("top")}`.replace("px", "");
    pointEl.style.top = `${top - 15}px`;
    // console.log(top);
  }
  if (e.key === "ArrowDown") {
    const top = `${pointEl.computedStyleMap().get("top")}`.replace("px", "");
    pointEl.style.top = `${top * 1 + 15}px`;
    // console.log(top);
  }
  if (e.key === "ArrowLeft") {
    const left = `${pointEl.computedStyleMap().get("left")}`.replace("px", "");
    pointEl.style.left = `${left - 15}px`;
    // console.log(left);
  }
  if (e.key === "ArrowRight") {
    const left = `${pointEl.computedStyleMap().get("left")}`.replace("px", "");
    pointEl.style.left = `${left * 1 + 15}px`;
    // console.log(left);
  }
});

document.addEventListener("click", (e) => {
  const point = document.createElement("div");
  point.classList.add("point");
  point.style.top = `${e.clientY - 15}px`;
  point.style.left = `${e.clientX - 15}px`;
  document.body.appendChild(point);
});

const printEvenDetails = (e) => console.log(e.target.innerHTML);
