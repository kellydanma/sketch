const removeElements = (nodes) => [...nodes].forEach((n) => n.remove());

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

function createGrid(id, container, width) {
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.id = id.toString();
  grid.style.backgroundColor = "black";
  grid.style.width = width;
  grid.style.height = width;
  container.appendChild(grid);
}

function deleteContainerElements() {
  const container = document.querySelector(".container");
  removeElements(container.childNodes);
}

function createContainer(nrGrid) {
  deleteContainerElements();
  const container = document.querySelector(".container");
  const width = ((container.offsetWidth - 20) / nrGrid).toString() + "px";
  for (let i = 0; i < nrGrid ** 2; i++) {
    createGrid(i, container, width);
  }
  handleHover();
}

createContainer(10);
