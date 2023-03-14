const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

const widthOfGame = window.getComputedStyle(game, null).getPropertyValue("width");
const widthOfDodger = window.getComputedStyle(dodger, null).getPropertyValue("width");

const widthOfGameInt = parseInt(widthOfGame, 10);
const widthOfDodgerInt = parseInt(widthOfDodger, 10);
const leftEdgeAtRight = widthOfGameInt - widthOfDodgerInt;

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  moveDodgerLeft();
  moveDodgerRight();