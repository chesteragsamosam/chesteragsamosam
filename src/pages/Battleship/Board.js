import { Ship } from './Ship';

class Board {
  constructor() {
    this.deployedShips = [];
    this.availableShips = this.initializeShips();
    this.sunkShips = [];
    this.cells = this.initializeCells();
    this.boardState = [];
  }
  initializeShips() {
    return [
      new Ship('Carrier', 5),
      new Ship('Battleship', 4),
      new Ship('Cruiser', 3),
      new Ship('Submarine', 3),
      new Ship('Destroyer', 2),
    ];
  }
  initializeCells() {
    const [rows, cols] = [10, 10];
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // cells.push(rows * r + c)
        cells.push(' ');
      }
    }
    return cells;
  }
  resetBoard() {
    const [rows, cols] = [10, 10];
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        cells.push('O');
      }
    }
    this.deployedShips = [];
    this.sunkShips = [];
    this.availableShips = this.initializeShips();
    this.cells = cells;
  }
  shuffleShips() {
    for (ship of this.availableShips) {
      let isInvalid = true;
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const isVertical = Math.random() < 0.5;
      if (isVertical) {
        if (ship.size + y < 10) {
          isInvalid = false;
        }
      } else {
        if (ship.size + x < 10) {
          isInvalid = false;
        }
      }
      const shipBody = [];
      for (let i = 0; i < ship.size; i++) {
        let bodyX = isVertical ? x : x + i;
        let bodyY = isVertical ? y + i * 10 : y;
        shipBody.push([bodyX, bodyY]);
      }
      for (body of shipBody) {
        const [bx, by] = body;
        const idx = by * 10 + bx;
        this.cells[idx] = 'O';
      }
      isInvalid = true;
      // while (isInvalid);
    }
  }

  checkValidity(board, newShip) {
    if (newShip.getOrientation()) {
    }
    this.boardState;
    newShip;
  }
}

export default Board;
