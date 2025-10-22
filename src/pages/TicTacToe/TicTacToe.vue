<template>
  <div>
    <div>
      <p>Current Board:</p>
      <div class="tictactoe-board">
        <div
          v-for="(cell, idx) in boardKey.flat()"
          :key="idx"
          class="cell"
          @click="makeMove(Math.floor(idx / 3), idx % 3)"
        >
          <span v-if="cell === 0">&nbsp;</span>
          <span v-else>{{ cell }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TicTacToeAI from './TicTacToeAi';

export default {
  data () {
    return {
      boardKey: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    }
  },
  mounted () {
    const ticTacToeAI = new TicTacToeAI('X')
    const bestMove = ticTacToeAI.getBestMove(this.boardKey)
    if (bestMove) {
      console.log('bestMove', bestMove.row, bestMove.col)
      this.boardKey[bestMove.row][bestMove.col] = 'X'
    }
  },
  methods: {
    makeMove (row, col) {
      if (this.boardKey[row][col] === 0) {
        this.boardKey[row][col] = 'O'
        const ticTacToeAI = new TicTacToeAI('X')
        const bestMove = ticTacToeAI.getBestMove(this.boardKey)
        if (bestMove) {
          console.log('bestMove', bestMove.row, bestMove.col)
          this.boardKey[bestMove.row][bestMove.col] = 'X'
        }
      }
    }
  }
}

</script>
<style>
.tictactoe-board {
  display: grid;
  grid-template-columns: repeat(3, 2rem);
  grid-template-rows: repeat(3, 2rem);
  gap: 4px;
  width: max-content;
  margin: 1rem 0;
}
.cell {
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background: #222;
  user-select: none;
}
</style>