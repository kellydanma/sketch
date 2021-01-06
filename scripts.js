function createGrid(id, container, width) {
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.id = id.toString();
  grid.style.backgroundColor = "black";
  grid.style.height = width;
  container.appendChild(grid);
}

function createContainer() {
  const container = document.querySelector(".container");
  const width = ((container.offsetWidth - 20) / 10).toString() + "px";
  for (let i = 0; i < 100; i++) {
    createGrid(i, container, width);
  }
}

function handleHover() {
  const grids = document.getElementsByClassName("grid");
  Array.from(grids).forEach((grid) => {
    grid.addEventListener(
      "mouseover",
      function (event) {
        const colour = grid.style.backgroundColor;
        event.target.style.backgroundColor = "orange";

        // Reset the color after a 500ms delay.
        setTimeout(function () {
          event.target.style.backgroundColor = colour;
        }, 500);
      },
      false
    );
  });
}

createContainer();
handleHover();
