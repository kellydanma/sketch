const removeElements = (nodes) => [...nodes].forEach((n) => n.remove());

const defaultContainer = createContainer(50);
const dropdown = (document.getElementById("nrgrid").onchange = handleDropdown);
const resetButton = (document.querySelector("button").onclick = handleReset);

function handleDropdown() {
  const nrgrid = this.value * 10;
  console.log(`Displaying an ${nrgrid} by ${nrgrid} canvas.`);
  createContainer(nrgrid);
}

function handleReset() {
  console.log(`Resetting to a 50 by 50 canvas.`);
  createContainer(50);
}

function handleHover() {
  const grids = document.getElementsByClassName("grid");
  Array.from(grids).forEach((grid) => {
    grid.addEventListener(
      "mouseenter",
      function (event) {
        const colour = grid.getAttribute("light");
        event.target.style.backgroundColor = darken(colour);
      },
      false
    );
    grid.addEventListener("mouseleave", function (event) {}, false);
  });
}

function deleteContainerElements() {
  const container = document.querySelector(".container");
  removeElements(container.childNodes);
}

function createGrid(id, container, width) {
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.id = id.toString();
  grid.style.backgroundColor = "hsl(37, 100%, 100%)";
  grid.style.width = width;
  grid.style.height = width;
  grid.setAttribute("light", "100");
  container.appendChild(grid);
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

function darken(colour) {
  return `hsl(37, 100%, ${Math.max(colour - 20, 0)}%)`;
}
