class Basket {
    constructor(x,y){
        var options = {
            restitution : 0
        }
        this.body = Bodies.rectangle(x, y, 75, 75, options);
        this.image = loadImage("basket.jpg");
        World.add (phyWorld, this.body);
        this.Visiblity = 255;
        
    }
    display(){
        console.log(score);
        if (this.body.speed < 5){
            var position = this.body.position;
    
            
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 75, 75);
      
        }
        else{
            World.remove(phyWorld, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 75, 75);
            pop();
        }
    }
    
    score(){
        if (this.Visiblity < 0 && this.Visiblity > -505){
          score++;
        }
    }
}
