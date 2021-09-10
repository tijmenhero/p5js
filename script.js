var x, y, m, n, v;

function setup() {
   createCanvas(500, 400)

   x = 0;
   y = 200;
   m = 200;
   n = 0;
   vx = 5;
   vy = 5;
   vm = 2;
   vn = 2;
}

function draw() {
  background(225);
  let c = color('red')
  let o = color('green')

  ellipse(x, y,50,50,);
  fill(c)
  x = x + vx
  y = y + vy

  if(x < 0 || x > 500){
    vx = vx * -1
  }

  if(y < 0 || y > 400)
   vy = vy * -1

   ellipse(m, n,50,50,);
  fill(o)
  m = m + vm
  n = n + vn

  if(m < 0 || m > 500){
    vm = vm * -1
  }

  if(n < 0 || n > 400)
   vn = vn * -1
}

class ball {

  constructor(x, y, w, h, vx, vy) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.vx = vx
    this.vy = vy
  }

drawBall() {
  ellipse(this.x, this.y, this.w, this.h)
}
}
