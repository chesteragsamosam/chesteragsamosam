<template>
  <div>
    <div>
      <canvas ref="initialCanvas" width="400" height="400"></canvas>
    </div>
    <div>
      Iteration: {{ iteration }} <span @click="timer += 100">FPS: {{ fps }}</span>
      <canvas ref="gameCanvas" width="600" height="600"></canvas>
    </div>
  </div>
</template>
<script src="./main"></script>