const container = document.querySelector(".container");
function createGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      div.style.border = "1px solid white";
      container.appendChild(div);
      div.addEventListener("mouseover", () => {
        if (div.classList.add("addColor")) {
          div.classList.remove("removeColor");
        }

        div.addEventListener("mouseover", () => {
          if (div.classList.contains("addColor")) {
            div.classList.add("removeColor");
          }
        });
      });
    }
  }
}
createGrid();
