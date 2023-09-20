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

// Gets size from the user
function getSize() {
  const input = prompt("What should be the size of the box ?");
  const message = document.querySelector("#message");

  if (!input) {
    message.innerHTML = "Please provide a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Please provide a number between 0 and 100";
  } else {
    message.innerHTML = `A board of ${input} x ${input} size is created!!`;
    return input;
  }
}

// Run the following only after HTML and CSS has been loaded
document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
//   creates a board of the inputed size
  const size_btn = document.querySelector('#popup');
  size_btn.addEventListener("click",()=>{
    createBoard(getSize());
  })
});
