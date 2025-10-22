<template>
  <div>
    <div v-if="currentNode" class="current-node">
      <p>Name: {{ currentNode.name }}</p>
      <p>Evaluation: ({{ currentNode.value }})</p>
      <div class="grid grid-cols-3 aspect-square w-16 fira-code">
        <div v-for="cell in currentNode.board.split('')" class="cell border text-center aspect-square leading-none">
          {{ cell.replace('_', '&nbsp;') }}
        </div>
      </div>
    </div>
    <div class="flex space-x-2 my-2">
      <div @click="changeCurrentNode(idx)" v-for="(n, idx) in childNodes" class="child border">
        {{ n.value || '?' }}
        <div class="grid grid-cols-3 aspect-square w-16 fira-code">
          <div v-for="cell in n.board.split('')" class="cell border text-center aspect-square leading-none">
            {{ cell.replace('_', '&nbsp;') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Node } from '@utils/nodes.mjs'
import { createTree } from '@utils/minimax.mjs'

const rootNode = new Node('_________')
let realCurrentNode = null
rootNode.board = '_________'
createTree(rootNode, 'X')

export default {
  setup () {
    const childNodes = ref([])
    const currentNode = ref(null)
    return { currentNode, childNodes }
  },
  watch: {
    currentNode (node) {
      if (node.children) this.childNodes = []
      this.childNodes = node.children && node.children.map(child => {
        return {
          name: child.name,
          board: child.board,
          value: child.value,
          // children: child.children
        }
      })
    }
  },
  mounted () {
    realCurrentNode = rootNode
    this.currentNode = {
      name: rootNode.name,
      board: rootNode.board,
      value: rootNode.value,
      children: rootNode.children
    }
  },
  methods: {
    changeCurrentNode (childrenIndex) {
      realCurrentNode = realCurrentNode.children[childrenIndex]
      console.log(realCurrentNode.value)
      this.currentNode = {
        name: realCurrentNode.name,
        board: realCurrentNode.board,
        value: realCurrentNode.value,
        children: realCurrentNode.children
      }
    }
  }
}

</script>