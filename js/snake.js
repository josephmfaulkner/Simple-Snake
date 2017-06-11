function Snake(){
  this.absSpeed = 1;
  this.x = 0;
  this.y = floor(random(floor(canvasHeight/scl))) * scl;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.tail = [createVector(this.x,this.y)];
  this.total = 0;

  this.update = function(){
    this.x = this.x + this.xSpeed * this.absSpeed * scl ;
    this.y = this.y + this.ySpeed * this.absSpeed * scl ;
    this.y = constrain(this.y, 0,canvasHeight - scl);
    this.x = constrain(this.x, 0,canvasWidth - scl);
    for(var i = 0; i < this.total - 1; i++){
      //this.tail[i] = this.tail[i + 1];
    }
    this.tail.splice(0,0,createVector(this.x,this.y));
    this.tail.pop();
  }

  this.eat = function(foodX,foodY){
    var d = dist(this.x,this.y,foodX,foodY);
    if (d < 10){
      this.total += 1;
      this.tail.splice(0,0,createVector(this.x,this.y));
      console.log(this.tail);
      return true;
    }
  }

  this.eatSelf = function(){
    for(var i = 1; i < this.tail.length; i++){
      var d = dist(this.x,this.y,this.tail[i].x,this.tail[i].y);
      if(d < 10){
        gameOver = true;
      }

    }
  }

  this.display = function(){
    stroke(255);
    fill(255);
    rect(this.x,this.y,scl,scl);
    for(var i = 0; i < this.tail.length ; i++){
      rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
  }

}
