function createGrid() {
  const container = document.querySelector(".container");
  const width = ((container.offsetWidth - 20) / 10).toString() + "px";
  for (let i = 0; i < 100; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.id = i.toString();
    grid.style.backgroundColor = "black";
    grid.style.height = width;
    container.appendChild(grid);
  }
}

createGrid();
