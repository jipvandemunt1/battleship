import Ship from "./ship";

test("increases the number of hits when hit() is called", () => {
  const ship = new Ship(3);
  const oldNumberHits = ship.numberHits;
  ship.hit();
  const newNumberHits = ship.numberHits;
  expect(newNumberHits).toBe(oldNumberHits + 1);
});

test("isSunk returns true when number of hits equals ship length", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toEqual(true);
});

test("isSunk returns false when not all parts are hit", () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});