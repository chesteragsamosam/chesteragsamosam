export class Node {
  constructor (name, depth = 0) {
    this.name = name
    this.children = null
    this.parent = null
    this.depth = depth
    this.value = null
    this.board = ''
  }
  addChild (node) {
    if (this.children === null) this.children = []
    this.children.push(node)
    node.parent = this
  }
  removeChild (node) {
    if (this.children === null) return
    const idx = this.children.indexOf(node)
    if (idx === -1) return
    node.parent = null
    this.children.splice(idx, 1)
    if (this.children.length === 0) this.children = null
  }
}

function testChild (a, b) {
  const isCorrectChild = a.children[0] === b
  const isCorrectParent = b.parent === a
  const res = isCorrectChild && isCorrectParent
}

function sameParents(...nodes) {
  if (nodes.length < 2) {
    return true
  }

  const firstNode = nodes[0];

  for (let i = 1; i < nodes.length; i++) {
    if (nodes[i].parent !== firstNode.parent) {
      return false;
    }
  }

  return true;
}
