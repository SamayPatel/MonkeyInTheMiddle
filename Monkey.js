class Monkey {
    constructor(x,y){
        var options = {
            'restitution':2.5,
            'friction':0.4,
            'density':0.2
        }
        this.body = Bodies.rectangle(x,y, 75,75, options);
        this.width = 75;
        this.height = 75;
        World.add(phyWorld, this.body);
        this.image = loadImage("monkey.png");
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
    }
}