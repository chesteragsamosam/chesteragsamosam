export class Ship {

  constructor(name, size) {
    this.name = name
    this.size = size
    this.direction = 'up'
    this.position = [0, 0]
  }
  setDirection (direction) {
    if (['up', 'down', 'left', 'right'].includes(direction)) {
      this.direction = direction;
    } else {
      console.error('Invalid direction. Use "up," "down," "left," or "right".');
    }
  }
  getOrientation () {
    if (['up', 'down'].includes(this.direction)) {
      return 'vertical'
    } else if (['left', 'right'].includes(this.direction)) {
      return 'horizontal'
    } else {
      throw ('invalid')
    }
  }
  rotate () {
    switch (this.direction) {
      case 'up':
        this.direction = 'right';
        break;
      case 'right':
        this.direction = 'down';
        break;
      case 'down':
        this.direction = 'left';
        break;
      case 'left':
        this.direction = 'up';
        break;
      default:
        console.error('Invalid direction.');
    }
  }
  getBody () { 
    let body = [this.position]
    let dir = ['up', 'left'].includes(this.direction) ? 1 : -1
    if (this.getOrientation() === 'horizontal') {
      for (let i = 1; i < this.size; i++) {
        body.push([this.position[0], i * dir + this.position[1] ])
      }
    } else {
      for (let i = 1; i < this.size; i++) {
        body.push([dir * i + this.position[0], this.position[1]])
      }
    }
  }
}