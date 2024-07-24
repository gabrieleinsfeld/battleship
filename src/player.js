import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    const gameboard = new Gameboard();
    this.gameboard = gameboard.board;
    this.gameboardObj = gameboard;
  }
}
