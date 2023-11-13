import { Ship } from './Ship'

class Board {
  constructor() {
    this.deployedShips = []
    this.availableShips = this.initializeShips()
    this.sunkShips = []
    this.cells = this.initializeCells()
    this.boardState = []
  }
  initializeShips () {
    return [
      new Ship('Carrier', 5),
      new Ship('Battleship', 4),
      new Ship('Cruiser', 3),
      new Ship('Submarine', 3),
      new Ship('Destroyer', 2),
    ]
  }
  initializeCells () {
    const [rows, cols] = [10, 10]
    const cells = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // cells.push(rows * r + c)
        cells.push('O')
      }
    }
    return cells
  }
  resetBoard () {
    const [rows, cols] = [10, 10]
    const cells = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        cells.push('O')
      }
    }
    this.deployedShips = []
    this.sunkShips = []
    this.availableShips = this.initializeShips()
    this.cells = cells
  }
  shuffleShips () {
    for (let i = 0; i < this.availableShips.length; i++) {
      let isInvalid = true
      do {
        const rand = Math.floor(Math.random() * this.cells.length * 4)
        const idx = Math.floor(rand/4)
        const dir = ['up', 'right', 'down', 'left'][rand % 4]
        if ()
        isInvalid = true
      } while (isInvalid)
    }
  }

  checkValidity (board, newShip) {
    if (newShip.getOrientation()) {

    }
    this.boardState
    newShip
    
  }
}