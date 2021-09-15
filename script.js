

class Ball {

  constructor(x, y, w, h, vx, vy,) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.vx = vx
    this.vy = vy
    this.color = color
  }

  drawBall() {
    ellipse(this.x, this.y, this.w, this.h)
    this.x = this.x + this.vx
    this.y = this.y + this.vy

    if(this.x < 0 || this.x > 500){
      this.vx = this.vx * -1
    }

    if(this.y < 0 || this.y > 400){
    this.vy = this.vy * -1
    }
  }
}

function setup() {
  createCanvas(500, 400)

  ball1 = new Ball(0, 300, 50, 50,5,5)
  ball2 = new Ball(200, 100, 40, 40,3,3)
  ball3 = new Ball(50, 200, 60, 60,6,6)
  ball4 = new Ball(260, 360, 20, 20,2,2)
  ball5 = new Ball(500, 400, 30, 30,6,6)
}

function draw() {
  background(225);

  ball1.drawBall()
  ball2.drawBall()
  ball3.drawBall()
  ball4.drawBall()
  ball5.drawBall()
}
  
