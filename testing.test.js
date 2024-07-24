import Ship from "./src/ship";
import Gameboard from "./src/gameboard";
test("Returns length 3, timesHit = 0 and isSunk = false", () => {
  const ship = new Ship(3);
  expect(ship).toEqual({ length: 3, timesHit: 0, sunk: false });
});

test("Returns false", () => {
  const ship = new Ship(3);
  const tof = ship.isSunk();
  expect(tof).toBeFalsy();
});

test("Returns the Gameboard with ship added", () => {
  const board = new Gameboard();
  board.addShip([0, 0], [0, 4]);
  expect(board.board).toEqual([
    [
      { length: 5, timesHit: 0, sunk: false },
      { length: 5, timesHit: 0, sunk: false },
      { length: 5, timesHit: 0, sunk: false },
      { length: 5, timesHit: 0, sunk: false },
      { length: 5, timesHit: 0, sunk: false },
      null,
      null,
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});
test("Returns Ship Hitted", () => {
  const board = new Gameboard();
  board.addShip([0, 0], [0, 4]);
  const hit = board.receiveAttack(0, 3);
  expect(hit).toBe("Ship hitted");
});

test("Returns True", () => {
  const board = new Gameboard();
  board.addShip([0, 0], [0, 4]);
  board.receiveAttack(0, 0);
  board.receiveAttack(0, 1);
  board.receiveAttack(0, 2);
  board.receiveAttack(0, 3);
  board.receiveAttack(0, 4);
  const areAllSunk = board.areAllSunk();
  expect(areAllSunk).toBeTruthy();
});
