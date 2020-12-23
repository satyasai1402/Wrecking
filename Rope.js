class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 2.0,
      length: 400,
    };

    
    this.rope = Constraint.create(options);
    World.add(myWorld, this.rope);
  }
  /*
  attach(body) {
    this.rope.bodyA = body;
  }

  fly() {
    this.rope.bodyA = null;
  }
*/
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.pointB;
      
      line(pointB.x, pointB.y, pointA.x, pointA.y);

     
    }
  }
}
