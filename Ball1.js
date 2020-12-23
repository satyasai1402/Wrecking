class Ball1 {
    constructor(x, y) {
      var options = { 
        density: 1, 
        friction: 1,
      //restitution:1
    };
  
      this.body = Bodies.circle(x, y, 100, options);
      this.radius=100;
      World.add(myWorld, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipse(0, 0, this.radius);
      pop();
    }
  }