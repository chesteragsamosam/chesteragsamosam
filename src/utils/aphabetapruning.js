function alphabeta(node, depth, alpha, beta, maximizingPlayer) {
  if (depth === 0 || node.isTerminal()) {
    return node.evaluate();
  }

  if (maximizingPlayer) {
    let value = -Infinity;
    for (let child of node.getChildren()) {
      value = Math.max(value, alphabeta(child, depth - 1, alpha, beta, false));
      alpha = Math.max(alpha, value);
      if (alpha >= beta) {
        break;
      }
    }
    return value;
  } else {
    let value = Infinity;
    for (let child of node.getChildren()) {
      value = Math.min(value, alphabeta(child, depth - 1, alpha, beta, true));
      beta = Math.min(beta, value);
      if (beta <= alpha) {
        break;
      }
    }
    return value;
  }
}

// Example usage:
// Define your node class with `isTerminal`, `getChildren`, and `evaluate` methods

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];this.addChild
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  isTerminal() {
    // Implement your terminal condition check
    return this.children.length === 0;
  }

  getChildren() {
    return this.children;
  }

  evaluate() {
    // Implement your evaluation function
    return this.value;
  }
}

// Example usage:
const root = new Node(3);
const child1 = new Node(5);
const child2 = new Node(6);
const child3 = new Node(2);
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

console.log(alphabeta(root, 2, -Infinity, Infinity, true)); // Assuming root is a maximizing player
