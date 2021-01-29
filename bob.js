class Bob{
    constructor(x,y,r){
        var opt = {
           isStatic : false,
            restitution : 0.8,
            friction : 0.5,
            density  : 2
        }
        this.radius = r
        this.body = Bodies.circle(x,y,r,opt)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,this.radius)
        pop()
    }
}