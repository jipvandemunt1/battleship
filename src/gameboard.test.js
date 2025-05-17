import Gameboard from "./gameboard";

test("places a ship of length 1 at the correct coordinates", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 1);
  expect(gameboard.ships[0].coordinates).toStrictEqual([[1, 1]]);
});

test("place a ship of length >1 horizontally at the correct coordinates", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 2);
  expect(gameboard.ships[0].coordinates).toStrictEqual([[1, 1], [2, 1]]);
});

test("place a ship of length >1 vertical at the correct coordinates", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 2, "vertical");
  expect(gameboard.ships[0].coordinates).toStrictEqual([[1, 1], [1, 2]]);
});

test("does not place a ship when starting coordinates are out of bounds", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 1);
  expect(gameboard.ships).toStrictEqual([]);
});

test("does not place a ship if coordinates overlap with an existing ship", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 1);
  gameboard.placeShip(1, 1, 1);
  expect(gameboard.ships.length).toBe(1);
});

// test("does not place a ship if coordinates are adjacent to an existing ship", () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(1, 1, 1);
//   gameboard.placeShip(1, 2, 1);
//   expect(gameboard.ships.length).toBe(1);
// });
