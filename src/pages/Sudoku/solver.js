export default class Solver {
    checkCells(cells) {
        for (let i = 0; i < 9; i++) {
            const rowSet = new Set();
            for (let j = 0; j < 9; j++) {
                const value = cells[i][j];
                if (value !== 0) {
                    if (rowSet.has(value)) {
                        return false;
                    }
                    rowSet.add(value);
                }
            }
        }
        return true;
    }
    checkRows(cells) {
        for (let i = 0; i < 9; i++) {
            const rowSet = new Set();
            for (let j = 0; j < 9; j++) {
                const value = cells[i][j];
                if (value !== 0) {
                    if (rowSet.has(value)) {
                        return false;
                    }
                    rowSet.add(value);
                }
            }
        }
        return true;
    }
    checkColumns(cells) {
        for (let j = 0; j < 9; j++) {
            const colSet = new Set();
            for (let i = 0; i < 9; i++) {
                const value = cells[i][j];
                if (value !== 0) {
                    if (colSet.has(value)) {
                        return false;
                    }
                    colSet.add(value);
                }
            }
        }
        return true;
    }
    checkSubgrids(cells) {
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                const subgridSet = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const value = cells[row + i][col + j];
                        if (value !== 0) {
                            if (subgridSet.has(value)) {
                                return false;
                            }
                            subgridSet.add(value);
                        }
                    }
                }
            }
        }
        return true;
    }
    findEmptyCell(cells) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (cells[i][j] === 0) {
                    return [i, j];
                }
            }
        }
        return null;
    }
    isValid(cells, row, col, num) {
        // Check row
        for (let j = 0; j < 9; j++) {
            if (cells[row][j] === num) {
                return false;
            }
        }
        // Check column
        for (let i = 0; i < 9; i++) {
            if (cells[i][col] === num) {
                return false;
            }
        }
        // Check subgrid
        const subgridRow = Math.floor(row / 3) * 3;
        const subgridCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (cells[subgridRow + i][subgridCol + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    solveSudoku(cells) {
        const emptyCell = this.findEmptyCell(cells);
        if (!emptyCell) {
            return true; // Solved
        }
        const [row, col] = emptyCell;

        for (let num = 1; num <= 9; num++) {
            if (this.isValid(cells, row, col, num)) {
                cells[row][col] = num;
                if (this.solveSudoku(cells)) {
                    return true;
                }
                cells[row][col] = 0; // Backtrack
            }
        }
        return false;
    }
}