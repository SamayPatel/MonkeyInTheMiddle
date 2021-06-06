class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
             pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(phyWorld, this.chain);
    }
    attach(input){
        this.chain.bodyA = input;
    }
    fly(){
        this.chain.bodyA = null;
    }
    
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}