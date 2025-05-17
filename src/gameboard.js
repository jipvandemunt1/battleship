import Ship from "./ship";

export default class Gameboard {
  constructor() {
    this.ships = []; // { ship, coordinates }
  }

  placeShip(x, y, length, direction = "horizontal") {
    // Create new Ship
    const ship = new Ship(length);

    // Create coordinates array for position of ship
    const coordinates = [];

    // if length is more than one, add more coordinates to coordinates
    for (let i = 0; i < length; i++) {
      const coordinate = direction === "horizontal" ? [x + i, y] : [x, y + i];
      // check if coordinate is within the gameboard
      if (!coordinate.every((num) => num > 0 && num < 11)) {
        return;
      }

      // two options
      // option one: coordinate is already in this.ships

      // get every coordinate out this.ships
      const allCoordinates = [];
      for (let i = 0; i < this.ships.length; i++) {
        for (let j = 0; j < this.ships[i].coordinates.length; j++) {
          allCoordinates.push(this.ships[i].coordinates[j]);
        }
      }

      // loop over array of coordinates
      // check if new coordinate is the same as a coordinate if so return
      for (let i = 0; i < allCoordinates.length; i++) {
        console.log(allCoordinates[i]);
        console.log(coordinate);
        if (
          coordinate[0] === allCoordinates[i][0] &&
          coordinate[1] === allCoordinates[i][1]
        ) {
          return;
        }
      }

      // option two: coordinate is adjacent to a coordinate in this.ships
      // for each coordinate in allcoordinates array 
      coordinates.push(coordinate);
    }
    this.ships.push({ ship, coordinates });
  }
}
