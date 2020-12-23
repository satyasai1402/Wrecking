class Box1 {
    constructor(x, y) {
      var BoxOptions = {
          'restitution':0.6,
          'friction':1.0,
          'density':1,
      }
      this.body = Bodies.rectangle(x, y, 100, 100, BoxOptions);
      this.image=loadImage("bin.png");
      this.visibility=255;
      this.width = 100;
      this.height = 100;
      
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
       
       if(this.body.speed>8){
        World.remove(myWorld,this.body);
         this.visibility=this.visibility-5;
         tint(255,this.visibility) 
       }
       imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
     
     pop();
    }
  }