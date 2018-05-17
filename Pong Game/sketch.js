let ball;
let paddleLeft;
let paddleRight;
let rightScore;
let leftScore;
let ding;

function setup() {
	createCanvas(800, 600);
	ball = new Ball();
	paddleLeft = new Paddle("left");
	paddleRight = new Paddle("right");
	leftScore = 0;
	rightScore = 0;
}

function draw() {
	frameRate(60);
	background(150);
	middleLine();
	stroke(0);
	strokeWeight(1);
	score();

	ball.show();
	ball.update();
	ball.reset();
	ball.edges();
	ball.hitsPaddle("left");
	ball.hitsPaddle("right");

	paddleLeft.show();
	paddleRight.show();
	paddleLeft.move("left");
	paddleRight.move("right");
}

function score() {
	fill(0);
	textSize(32);
	text(leftScore, 5, 30);
	text(rightScore, width - 40, 30);
}

// function preload() {
// 	ding = loadSound("ding.mp3");
// }

function middleLine() {
	for (i = 0; i < 30; i++) {
		strokeWeight(3);
		stroke(50);
		line(width/2, i*20+5, width/2, i*20+15);
	}
}
