function drawGrid(){
  stroke(100,100,100);
  for(var row = 1; row <=screenRows; row++){
    line(0,row*scl,canvasWidth,row*scl);
  }
  for(var col = 1; col <= screenCols; col++){
    line(col*scl,0,col*scl ,canvasHeight);
  }
}

function resetGame(){
  snake = new Snake();
  food = new Food();
  gameOver = false;
}

function keyPressed(){
  console.log(keyCode);
  switch(keyCode){
    case LEFT_ARROW:
      snake.xSpeed = -1;
      snake.ySpeed = 0;
      break;
    case RIGHT_ARROW:
      snake.xSpeed = 1;
      snake.ySpeed = 0;
      break;
    case UP_ARROW:
      snake.xSpeed = 0;
      snake.ySpeed = -1;
      break;
    case DOWN_ARROW:
      snake.xSpeed = 0;
      snake.ySpeed = 1;
      break;
    case 32 :
      resetGame();
    default:
      break;
  }
}
