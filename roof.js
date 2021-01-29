class Roof{
    constructor(x,y,w,h){
        var opt = {
            restitution:0,
            isStatic:true
        }
        this.width = w
        this.height = h
        this.body = Bodies.rectangle(x,y,w,h,opt)
        World.add(world,this.body)
    }
    show(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}