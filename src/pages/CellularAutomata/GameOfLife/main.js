export default {
  data() {
    return {
      resolution: 10, // Size of each cell
      cols: 60, // Set your number of columns
      rows: 60, // Set your number of rows
      grid: [],
      iteration: 0,
      fps: 0,
      lastRenderTime: performance.now(),
      timer: 1000,
    };
  },
  mounted() {
    // console.log('asd')
    this.createGrid();
    this.run();
  },
  methods: {
    createGrid() {
      for (let i = 0; i < this.cols; i++) {
        this.grid[i] = [];
        for (let j = 0; j < this.rows; j++) {
          this.grid[i][j] = Math.floor(Math.random() * 2);
        }
      }
      // Clear grid
      for (let i = 0; i < this.cols; i++) {
        this.grid[i] = [];
        for (let j = 0; j < this.rows; j++) {
          this.grid[i][j] = 0;
        }
      }

      // Define glider-producing machine pattern
      const gliderMachine = [
        [1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1],
      ];

      // Place the glider-producing machine in the center of the grid
      const offsetX =
        Math.floor(this.cols / 2) - Math.floor(gliderMachine.length / 2);
      const offsetY =
        Math.floor(this.rows / 2) - Math.floor(gliderMachine[0].length / 2);

      for (let i = 0; i < gliderMachine.length; i++) {
        for (let j = 0; j < gliderMachine[0].length; j++) {
          this.grid[offsetX + i][offsetY + j] = gliderMachine[i][j];
        }
      }
      const canvas = this.$refs.initialCanvas;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          const cell = this.grid[i][j];
          ctx.fillStyle = cell === 1 ? 'black' : 'white';
          ctx.fillRect(
            i * this.resolution,
            j * this.resolution,
            this.resolution - 1,
            this.resolution - 1,
          );
        }
      }
    },
    update() {
      const nextGen = [];
      for (let i = 0; i < this.cols; i++) {
        nextGen[i] = [];
        for (let j = 0; j < this.rows; j++) {
          const cell = this.grid[i][j];
          let neighbors = 0;

          for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
              const col = (i + x + this.cols) % this.cols;
              const row = (j + y + this.rows) % this.rows;
              neighbors += this.grid[col][row];
            }
          }
          neighbors -= cell;

          if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
            nextGen[i][j] = 0;
          } else if (cell === 0 && neighbors === 3) {
            nextGen[i][j] = 1;
          } else {
            nextGen[i][j] = cell;
          }
        }
      }
      this.grid = nextGen;
    },
    render() {
      const canvas = this.$refs.gameCanvas;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          const cell = this.grid[i][j];
          ctx.fillStyle = cell === 1 ? 'black' : 'white';
          ctx.fillRect(
            i * this.resolution,
            j * this.resolution,
            this.resolution - 1,
            this.resolution - 1,
          );
        }
      }
    },
    calculateFPS() {
      const now = performance.now();
      const elapsed = now - this.lastRenderTime;
      this.lastRenderTime = now;
      const fps = Math.round(1000 / elapsed);
      this.fps = fps;
    },
    run() {
      this.calculateFPS();
      this.render();
      this.update();
      this.iteration += 1;
      setTimeout(() => {
        requestAnimationFrame(this.run);
      }, this.timer / 500);
    },
  },
};
