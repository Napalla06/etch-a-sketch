let pad = document.querySelector(".pad");
let gridSize = document.querySelector(".grid-size");
let letsGo = document.querySelector(".lets-go");

let mouseDown = false;

const draw = (mouseDownEvent) => {
  if (mouseDown) {
    mouseDownEvent.target.classList.toggle("active");
  }
};

const createGrid = () => {
  let rows = gridSize.value;
  let columns = gridSize.value;

  //reset grid when 'let's go' is clicked
  pad.innerHTML = "";

  //create column in the number of given columns
  for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.className = "column";
    //create row in the number of given rows
    for (let j = 0; j < rows; j++) {
      let row = document.createElement("div");
      row.className = "row";
      column.appendChild(row);
      row.onmousedown = () => (mouseDown = true);
      row.onmouseup = () => (mouseDown = false);
      row.addEventListener("mousedown", draw);
      row.addEventListener("mouseover", draw);
    }
    pad.appendChild(column);
  }
};

letsGo.addEventListener("click", createGrid);
