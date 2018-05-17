class Paddle {
  constructor(side) {
    this.side = side;
    this.w = 12;
    this.h = 100;
    this.speed = 10;
    if (this.side == "left") {
      this.x = this.w;
      this.y = height/2;
    }
    if (this.side == "right") {
      this.x = width - this.w;
      this.y = height/2;
    }
  }

  show() {
    rectMode(CENTER);
    fill(100);
    rect(this.x, this.y, this.w, this.h);
  }

  move(side) {
    if (side == "right") {
    this.y = constrain(this.y, paddleLeft.h/2, height-paddleLeft.h/2);
    if (keyIsDown(UP_ARROW)) this.y -= this.speed;
    if (keyIsDown(DOWN_ARROW)) this.y += this.speed;
    }
    else if (side == "left") {
    this.y = constrain(this.y, paddleLeft.h/2, height-paddleLeft.h/2);
    if (keyIsDown(87)) this.y -= this.speed;
    if (keyIsDown(83)) this.y += this.speed;
    }
  }
}
