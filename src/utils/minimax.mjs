import { Node } from './Nodes.mjs'

const winnerCounts = { X: 0, O: 0}

function getCount(symbol, str) {
  const regex = new RegExp(symbol, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

function evaluate (board) {
  const count = getCount('_', board)
  if (count > 4) return null
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  // Check each winning line.
  for (const line of winningLines) {
    const linePositions = line.map(index => board[index]);
    const winner = getLineWinner(linePositions);
    if (winner) {
      return winner === 'X' ? 1 : -1;
    }
  }
  if (count == 0) {
    return 'draw'
  }
  return null;
}
function getLineWinner(pos) {
  if (pos.includes('_') || new Set(pos).size !== 1) {
    return null;
  }
  return pos[0];
}

function getPossibleOutcomes(board, player) {
  const evaluation = evaluate(board)
  if (evaluation != null) {
    return []
  }
  const possibleOutcomes = []
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '_') {
      const newBoard = board.split('')
      newBoard[i] = player
      possibleOutcomes.push(newBoard.join(''))
    }
  }
  return possibleOutcomes
}

function minimax(board, depth, isMaximizingPlayer, player) {
  if (depth === 0 || isGameFinished(board)) {
    return evaluate(board);
  }

  if (isMaximizingPlayer) {
    let maxEval = -Infinity;
    for (let outcome of getPossibleOutcomes(board, player)) {
      let res = minimax(outcome, depth - 1, false, opp(player));
      maxEval = Math.max(maxEval, res);
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let outcome of getPossibleOutcomes(board, player)) {
      let res = minimax(outcome, depth - 1, true, opp(player));
      minEval = Math.min(minEval, res);
    }
    return minEval;
  }
}

// function createTree (node) {
//   const evaluation = evaluate(node.board)
//   if (evaluation === null) {
//     possibleOutcomes = getPossibleOutcomes(node.board)
//     for (const outcome of possibleOutcomes) {
//       const newNode = new Node(outcome)
//       newNode.board = outcome
//       node.addChild(newNode);
//     }
//   } else {
//     node.value = evaluation
//   }
// }

function opp(player) {
  return player == 'X' ? 'O' : 'X'
}

export function createTree (node, player) {
  if (!node.board.includes('_')) {
    node.value = getScore(node.board, player)
    return
  }
  const possibleOutcomes = getPossibleOutcomes(node.board, player)
  if (possibleOutcomes.length == 0) {
    node.value = getScore(node.board, player)
    return
  }
  for (const outcome of possibleOutcomes) {
    const newNode = new Node(outcome)
    newNode.board = outcome
    node.addChild(newNode);
    createTree(newNode, opp(player))
  }
}
// console.log('___X__O__', getPossibleOutcomes('___X__O__', 'X'))
