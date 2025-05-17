export default class Ship {
  constructor(length) {
    this.length = length;
    this.numberHits = 0;
    this.sunk = false;
  }

  hit() {
    this.numberHits++;
  }

  isSunk() {
    return this.numberHits >= this.length;
  }
}
