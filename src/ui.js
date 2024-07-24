import Gameboard from "./gameboard";
import Player from "./player";
import Ship from "./ship";
export default class Ui {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.players = [this.player1, this.player2];
    this.turn = this.player1;
  }
  displayBoards() {
    const container = document.getElementById("container");
    this.players.forEach((player) => {
      const boardContainer = document.createElement("div");
      boardContainer.classList.add("board-container");
      const array = player.gameboard;
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          const element = array[i][j];
          const cell = document.createElement("div");
          cell.classList.add("cell");
          const handleClick = () => {
            if (this.turn == player) {
              if (player.gameboard[i][j]) {
                if (player.gameboardObj.receiveAttack(i, j) == "Ship hitted") {
                  cell.classList.toggle("cell");
                  cell.classList.toggle("red");
                }
              } else {
                cell.classList.toggle("cell");
                cell.classList.toggle("black");
              }
              this.changeTurn();
              // Remove the event listener only if the condition is met
              cell.removeEventListener("click", handleClick);
            } else {
              console.log("Not your turn");
            }
          };
          cell.addEventListener("click", handleClick);
          boardContainer.appendChild(cell);
        }
      }
      container.appendChild(boardContainer);
    });
    this.displayPlayer();
    this.displayStrBtn();
  }
  changeTurn() {
    this.turn = this.turn == this.player1 ? this.player2 : this.player1;
    this.displayPlayer();
  }
  displayPlayer() {
    const header = document.getElementById("header");
    header.innerHTML = "";
    const startBtn = document.createElement("div");
    startBtn.setAttribute("id", "player");
    startBtn.textContent =
      this.turn == this.player1 ? "Player's 1 turn" : "Player's 2 turn";
    header.appendChild(startBtn);
  }
  displayStrBtn() {
    const header = document.getElementById("display-player");
    const startBtn = document.createElement("button");
    startBtn.setAttribute("id", "start-btn");
    startBtn.textContent = "Start";
    header.appendChild(startBtn);
    const coordinateDialog = document.getElementById("coordinate-dialog");
    const closeDialogButton = document.getElementById("close-dialog-button");
    const submitCoordinatesButton = document.getElementById(
      "submit-coordinates-button"
    );

    // Open dialog button event listener
    startBtn.addEventListener("click", function () {
      coordinateDialog.style.display = "block";
    });

    // Close dialog button event listener
    closeDialogButton.addEventListener("click", function () {
      coordinateDialog.style.display = "none";
    });

    // Submit button event listener
    submitCoordinatesButton.addEventListener("click", () => {
      const inputX1Coordinate = document.getElementById(
        "input-x1-coordinate"
      ).value;
      const inputX2Coordinate = document.getElementById(
        "input-x2-coordinate"
      ).value;
      const inputY1Coordinate = document.getElementById(
        "input-y1-coordinate"
      ).value;
      const inputY2Coordinate = document.getElementById(
        "input-y2-coordinate"
      ).value;

      const x1Coordinate = parseFloat(inputX1Coordinate);
      const x2Coordinate = parseFloat(inputX2Coordinate);
      const y1Coordinate = parseFloat(inputY1Coordinate);
      const y2Coordinate = parseFloat(inputY2Coordinate);

      if (
        isNaN(x1Coordinate) ||
        isNaN(x2Coordinate) ||
        isNaN(y1Coordinate) ||
        isNaN(y2Coordinate)
      ) {
        alert("Please enter valid numbers for all coordinates.");
      } else {
        const xArray = [x1Coordinate, x2Coordinate];
        const yArray = [y1Coordinate, y2Coordinate];
        this.turn.gameboardObj.addShip(xArray, yArray);
        this.changeTurn();
      }
    });
  }
}
