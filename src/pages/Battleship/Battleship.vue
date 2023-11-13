<template>
  <div class="mx-auto aspect-square grid grid-cols-12 font-semibold text-lg max-w-lg mt-2 fira-code min-h-full">
    <div class="text-center grid items-center aspect-square rounded-none">
      &nbsp;
    </div>
    <div class="col-span-10 flex">
      <div v-for="num in 10" class="flex items-center justify-center aspect-square h-full rounded-none">
        {{ num }}
      </div>
    </div>
    <div class="text-center grid items-center aspect-square rounded-none">
      &nbsp;
    </div>
    <div>
      <div v-for="r in rowNames" class="grid items-center text-center  grid-cols-1 aspect-square">
        {{ r }}
      </div>
    </div>
    <div class="col-span-10 grid grid-cols-10 border-2 ">
      <button v-for="(cell, idx) in 100"
        class="hover:bg-blue-900 outline-blue-300 outline-dashed bg-blue-950 text-white aspect-square items-center rounded-none whitespace-nowrap"
        type="button">

      </button>
    </div>

    <div>
      <div v-for="r in rowNames" class="grid items-center text-center grid-cols-1 aspect-square">
        {{ r }}
      </div>
    </div>
    <div class="text-center grid items-center aspect-square rounded-none">
      &nbsp;
    </div>
    <div class="col-span-10 flex">
      <div v-for="num in 10" class="flex items-center justify-center aspect-square h-full rounded-none">
        {{ num }}
      </div>
    </div>
    <div class="text-center grid items-center aspect-square rounded-none">
      &nbsp;
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    const rowNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return { rowNames }
  }
}
</script>