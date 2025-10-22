<template>
  <div>
    <h1>Regex App</h1>
    <label for="activeFlags">Flags: {{ flags }}</label>
    <br />
    <input v-model="activeFlags" id="activeFlags" />
    <br />
    <label for="regexPattern">Regex Pattern:</label>
    <br />
    <input v-model="regexPattern" id="regexPattern" />
    <br />
    <label for="testString">Test String:</label>
    <br />
    <textarea class="w-full rounded h-60" v-model="testString" id="testString" />
    <div v-if="regexMatches !== null">
      <h2>Match Result:</h2>
      <div class="bg-gray-950 text-gray-50">
        <pre>{{ regexMatches }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { longString } from '@/helpers/regex.js'

const regexPattern = ref('')
const testString = ref(longString)
const flags = ['d', 'g', 'i', 'm', 's', 'u', 'v', 'y']
const activeFlags = ref('')

const regexMatches = computed(() => {
  try {
    const regex = new RegExp (regexPattern.value, activeFlags.value)
    return testString.value.match(regex)
  } catch (err) { 
    console.log(err)
    return 'Invalid regex pattern'
  }
})


</script>

<style lang="scss" scoped>

</style>