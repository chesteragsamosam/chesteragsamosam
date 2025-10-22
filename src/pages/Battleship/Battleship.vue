<template>
  <div class="grid max-w-lg min-h-full grid-cols-12 mx-auto mt-2 text-lg font-semibold aspect-square fira-code">
    <div class="grid items-center text-center rounded-none aspect-square">
      &nbsp;
    </div>
    <div class="flex col-span-10">
      <div v-for="num in 10" class="flex items-center justify-center h-full rounded-none aspect-square">
        {{ num }}
      </div>
    </div>
    <div class="grid items-center text-center rounded-none aspect-square">
      &nbsp;
    </div>
    <div>
      <div v-for="r in rowNames" class="grid items-center grid-cols-1 text-center aspect-square">
        {{ r }}
      </div>
    </div>
    <div class="grid grid-cols-10 col-span-10 border-2 ">
      <button v-for="(cell, idx) in 100"
        class="items-center text-white rounded-none hover:bg-blue-900 outline-blue-300 outline-dashed bg-blue-950 aspect-square whitespace-nowrap"
        type="button">

      </button>
    </div>

    <div>
      <div v-for="r in rowNames" class="grid items-center grid-cols-1 text-center aspect-square">
        {{ r }}
      </div>
    </div>
    <div class="grid items-center text-center rounded-none aspect-square">
      &nbsp;
    </div>
    <div class="flex col-span-10">
      <div v-for="num in 10" class="flex items-center justify-center h-full rounded-none aspect-square">
        {{ num }}
      </div>
    </div>
    <div class="grid items-center text-center rounded-none aspect-square">
      &nbsp;
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import Board from './Board'

export default {
  setup () {
    const rowNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return { rowNames }
  },
  mounted () {
    const board1 = new Board()
    board1.initializeShips()
    board1.shuffleShips()
    
    console.log(board1.initializeCells())
  }
}
</script>