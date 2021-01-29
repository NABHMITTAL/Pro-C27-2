class Rope {
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.4,
            length : 150
        }
        this.chain = Constraint.create(opt);
        this.pointB = pointB
        World.add(world,this.chain);
    }

    display(){
        var b1 = this.chain.bodyA.position
        var b2 = this.pointB

        strokeWeight (4);
        fill("black")
        line (b1.x,b1.y,b2.x,b2.y );
    }
}