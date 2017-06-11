function setup(){
  frameRate(10);
  createCanvas(canvasWidth,canvasHeight);
  background(50,50,60);
  snake = new Snake();
  food = new Food();
}

function draw(){
  if (snake.eat(food.x,food.y)){
    food = new Food();
  }
  if(!gameOver){
    background(50,50,60);
    snake.update();
    snake.eatSelf();
  }else{
    background(75,50,50);
  
  }
  snake.display();
  food.display();
  drawGrid();
  textSize(32);
  text(snake.total,0,scl * screenRows);
  if(gameOver){
    textSize(32);
    text("GAME OVER",scl * 2,scl * floor(screenRows/2));
    textSize(25);
    text("Spacebar to Reset",scl * 1.75,scl * (floor(screenRows/2)+1));
  }
}
