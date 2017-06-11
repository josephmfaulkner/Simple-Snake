function Food(){
  this.x = floor(random(floor(canvasWidth/scl))) * scl;
  this.y = floor(random(floor(canvasHeight/scl))) * scl;

  this.display = function(){
    fill(200,200,200);
    rect(this.x,this.y,scl,scl);
  }
}
