class Node {
    constructor (state) {
        this.state = state
        this.name = state.join('')
        this.evaluation = 0
        this.children = []
        this.parent = null
    }
}
const wins = []
const hasWinChild = node => {
    const evaluations = node.children.map(child => child.evaluation == 1)
    return evaluations.length ? evaluations.includes(true) : false
}

const hasLoseChild = node => {
    const evaluations = node.children.map(child => child.evaluation == -1)
    return evaluations.length ? evaluations.includes(true) : false
}

const findWinMove = (node) => {
    node.children.find(n => n.guaranteeWin)
}

const root = new Node([3, 5, 1])
root.currentPlayerToMove = true

const getSum = (a, b) => a + b

let value = 0
const  minimax = (node, depth = 3, maximizingPlayer) => {
    if ((depth == 0)) {
        // return node.state.reduce(getSum) === 1 ? -1 : 'unknown'
    }
    if (node.state.reduce(getSum) === 1) {
        return -1
    }
    if (hasLoseChild(node)) {
        return 1
    }
    if (maximizingPlayer) {
        value = -Infinity
        for (child of node.children) {
            value = Math.max(value, minimax(child, depth - 1, false))
        }
    } else {
        value = Infinity
        for (child of node.children) {
            value = Math.min(value, minimax(child, depth - 1, true))
        }
    }
    return value
}
// const getEvaluation = (node) => {
//     const childrenEvals = []
//     if (node.state.reduce(getSum) === 1) {
//         node.evaluation = -1
//         return -1
//     }
//     if (node.children.length) {
//         for (let i = 0; i < node.children.length; i++) {
//             childrenEvals.push(getEvaluation(node.children[i]))
//         }
//     }
//     // console.log('getEvaluation', node.name, childrenEvals, childrenEvals.includes(-1))
//     if (childrenEvals.includes(-1)) {
//         node.evaluation = 1
//         console.log(node.name)
//         return 1
//     }
//     if (childrenEvals.length == 0) return 1
//     // console.log(node.name)
// }

const createChildren = (node) => {
    if (node.state.reduce(getSum) === 0) return
    for (let i = 0; i < node.state.length; i++) {
        const nextState = new Array(...node.state)
        for (let j = 1; j <= node.state[i]; j++) {
            nextState[i] = node.state[i] - j
            let newState = new Node([...nextState])
            // newState.parent = node
            node.children.push(newState)
            if (newState.state.reduce(getSum) == 1) {
                newState.evaluation = -1
            }
            // if (newState.currentPlayerToMove && newState.hasLoseChild) newState.evaluation = 1
            
            if (newState.state.reduce(getSum) != 0) {
                newState.currentPlayerToMove = !newState.currentPlayerToMove
                createChildren(newState)
            }
            newState.hasWinChild = hasWinChild(newState)
            newState.hasLoseChild = hasLoseChild(newState)
            // if (newState.hasWinChild && newState.currentPlayerToMove) newState.evaluation = 1
            if (newState.hasLoseChild && newState.currentPlayerToMove) newState.evaluation = 1
            // if (newState.hasLoseChild && !newState.currentPlayerToMove) newState.evaluation = -1
            // if (newState.hasWinChild && !newState.currentPlayerToMove) newState.evaluation = -1
            /**** */
            // if (newState.hasWinChild && !newState.hasLoseChild) {
            //     newState.guaranteeWin = true
            // }
            // if (!newState.hasWinChild && newState.hasLoseChild) {
            //     newState.guaranteeWin = false
            // }
            /**** */
            // if (newState.currentPlayerToMove) {
            //     if (newState.hasLoseChild) {
            //         newState.guaranteeWin = true
            //     }
            // } else {
            //     if (newState.hasLoseChild) {
            //         newState.guaranteeWin = false
            //     }
            // }
            // if (newState.evaluation === -1) {
            //     if (!newState.currentPlayerToMove) {
            //         wins.push(newState.name)
            //     }
            // }
            // if (newState.hasWinChild && newState.currentPlayerToMove) {
            //     newState.guaranteeWin = true
            // } else if (newState.hasWinChild && !newState.currentPlayerToMove) {
            //     newState.guaranteeWin = false
            // } else if (newState.guaranteeWin && newState.currentPlayerToMove) {
            //     newState.guaranteeWin = true
            // } else if (newState.guaranteeWin && !newState.currentPlayerToMove) {
            //     newState.guaranteeWin = false
            // }
            // if ()

            // if (findWinMove(newState)) {
            //     newState.guaranteeWin = true
            // } else {
            //     // newState.guaranteeWin = false
            // }
            newState.evaluation = Math.floor(Math.random() * 90)
            wins.push(newState.evaluation)
        }
    }
}

const showHasChild = (node) => {
    console.log(node.name, minimax(node, 4, true))
}
createChildren(root)
console.log(root)
showHasChild(root)
// showHasChild(root.children[5])
// showHasChild(root.children[8])
// showHasChild(root.children[8].children[1])
// showHasChild(root.children[5].children[2].children[0].children[0])
// showHasChild(root.children[5].children[1].children[0])
// showHasChild(root.children[5].children[0].children[1])
// showHasChild(root.children[5].children[1].children[1])
// showHasChild(root.children[5].children[1].children[2])
// // console.log(hasWinChild(root.children[5].children[3]))
console.log(new Set(wins))
// console.log(minimax(root, 9, true))