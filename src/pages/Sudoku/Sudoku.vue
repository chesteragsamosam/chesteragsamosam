<script setup>
import { ref } from 'vue'
import sample from './sample.js'
import Solver from './solver.js'

const sudoku = ref('')
sudoku.value = sample
const solver = new Solver(sudoku.value)
console.log(solver.checkRows(sudoku.value))
console.log(solver.checkColumns(sudoku.value))
console.log(solver.checkSubgrids(sudoku.value))
console.log(solver.solveSudoku(sudoku.value))
</script>
<template>
    <div>
        <table class="sudoku-board">
      <tbody>
        <tr v-for="(row, rowIndex) in sudoku" :key="rowIndex">
                    <td
                        v-for="(cell, colIndex) in row"
                        :key="colIndex"
                        :class="[
                            (colIndex % 3 === 0 && colIndex !== 0) ? 'thick-left' : '',
                            (rowIndex % 3 === 0 && rowIndex !== 0) ? 'thick-top' : ''
                        ]"
                    >
                        {{ cell === 0 ? '' : cell }}
                    </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<style scoped>
.sudoku-board {
  border-collapse: collapse;
}
.sudoku-board td {
  width: 32px;
  height: 32px;
  text-align: center;
  border: 1px solid #333;
  font-size: 1.2em;
  transition: border 0.2s;
}
.thick-left {
  border-left: 2px solid #222 !important;
}
.thick-top {
  border-top: 2px solid #222 !important;
}
</style>