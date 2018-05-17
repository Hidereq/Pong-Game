class Ball {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.d = 40;
    this.speed = 10;
    this.angle = random(-PI/3, PI/3);
    this.xspeed = cos(this.angle) * this.speed;
    this.yspeed = sin(this.angle) * this.speed;
  }

  show() {
    fill(200);
    ellipse(this.x, this.y, this.d);
  }

  reset() {
	  if (this.x > width) {
      this.x = width/2;
      this.y = height/2;
      this.angle = random((2/3)*PI, (4/3)*PI);
      if (this.angle == 0) this.angle = random((2/3)*PI, (4/3)*PI);
      this.xspeed = cos(this.angle) * this.speed;
      this.yspeed = sin(this.angle) * this.speed;
      leftScore++;
      //ding.play();
      }

    if (this.x < 0) {
      this.x = width/2;
      this.y = height/2;
      this.angle = random(-PI/3, PI/3);
      if (this.angle == 0) this.angle = random(-PI/3, PI/3);
      this.xspeed = cos(this.angle) * this.speed;
      this.yspeed = sin(this.angle) * this.speed;
      rightScore++;
      //ding.play();
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  edges() {
    if (this.y - this.d/2 < 0 || this.y + this.d/2 > height)
      this.yspeed *= -1;
  }

  hitsPaddle(side) {
    if (this.x - this.d/2 < paddleLeft.x + paddleLeft.w/2 &&
      this.y - this.d/4 < paddleLeft.y + paddleLeft.h/2 &&
      this.y + this.d/4 > paddleLeft.y - paddleLeft.h/2 &&
      this.x - this.d/2 > paddleLeft.x - paddleLeft.w/2 &&
      side == "left") this.xspeed *= -1;


    else  if (this.x + this.d/2 > paddleRight.x - paddleRight.w/2 &&
      this.y - this.d/4 < paddleRight.y + paddleRight.h/2 &&
      this.y + this.d/4 > paddleRight.y - paddleRight.h/2 &&
      this.x + this.d/2 < paddleRight.x + paddleRight.w/2 &&
      side == "right") this.xspeed *= -1;
    }
}
