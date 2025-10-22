export default class TicTacToeAI {
  constructor(player) {
    this.player = player;
  }
  checkWinner (board) {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
        return board[i][0]
      }
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
        return board[0][i]
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
      return board[0][0]
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
      return board[0][2]
    }
    // Check for tie
    if (board.flat().every(cell => cell !== 0)) {
      return 'tie'
    }
    return null
  }
  minimax(board, depth, isMaximizing, alpha = -Infinity, beta = Infinity) {
  const opponent = this.player === 'X' ? 'O' : 'X';
  const result = this.checkWinner(board);
  if (result !== null) {
    if (result === this.player) return 10 - depth;
    if (result === opponent) return depth - 10;
    return 0;
  }
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          board[i][j] = this.player;
          const score = this.minimax(board, depth + 1, false, alpha, beta);
          board[i][j] = 0;
          bestScore = Math.max(bestScore, score);
          alpha = Math.max(alpha, bestScore);
          if (beta <= alpha) break;
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          board[i][j] = opponent;
          const score = this.minimax(board, depth + 1, true, alpha, beta);
          board[i][j] = 0;
          bestScore = Math.min(bestScore, score);
          beta = Math.min(beta, bestScore);
          if (beta <= alpha) break;
        }
      }
    }
    return bestScore;
  }
}
  getBestMove(board) {
    // Implement AI logic to find the best move
    let bestMove = null;
    let bestValue = -Infinity;
    console.table('board in getBestMove', board);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          board[i][j] = this.player;
          const moveValue = this.minimax(board, 0, false);
          board[i][j] = 0;

          if (moveValue > bestValue) {
            bestValue = moveValue;
            bestMove = { row: i, col: j };
          }
        }
      }
    }
    return bestMove;
  }
}