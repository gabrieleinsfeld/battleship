import Ship from "./ship";

export default class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }
  createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        const coordinate = null;
        row.push(coordinate);
      }
      board.push(row);
    }
    return board;
  }
  addShip(x, y) {
    let direction = null;
    if (x[0] == x[1]) {
      direction = "horizontal";
    } else {
      direction = "vertical";
    }
    const length = this.isValid(x, y, direction);
    if (length == false) {
      return "Ship already here";
    }
    const ship = new Ship(length);
    for (let i = 0; i < length; i++) {
      if (direction == "horizontal") {
        this.board[x[0]][y[0] + i] = ship;
      } else {
        this.board[x[0] + i][y[0]] = ship;
      }
    }
  }
  isValid(x, y, direction) {
    let length = 0;
    if (direction == "horizontal") {
      length = y[1] - y[0] + 1;
      let i = 0;
      while (i < length) {
        if (this.board[x[0]][y[0] + i] != null) {
          return false;
        }
        i++;
      }
    } else {
      length = x[1] - x[0] + 1;
      let i = 0;
      while (i < length) {
        if (this.board[x[0] + i][y[0]] != null) {
          return false;
        }
        i++;
      }
    }
    return length;
  }
}
