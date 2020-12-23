class Ground1{
    constructor(x,y,w,h) {
        var Ground1Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,Ground1Options);
        this.width=w;
        this.height=h;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}