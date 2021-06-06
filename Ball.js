class Ball {
    constructor(x,y){
        var options = {
            'restitution': 0.8,
            'friction': 1.2,
            'density' : 0.5
        }
        this.body = Bodies.rectangle(x,y, 50 ,50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("tomahto.png");
        World.add(phyWorld, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.width, this.height);
        pop();
    }
}