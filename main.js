function createBoard(size) {
  let board = document.querySelector(".board");

  // creates a grid template for our divs
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  // creates divs and adds them to the container
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend", div);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
});
