export default class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }
  hit() {
    this.timesHit++;
  }
  isSunk() {
    this.sunk = this.timesHit >= this.length ? true : false;
  }
}
