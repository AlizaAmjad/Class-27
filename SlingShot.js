class SlingShot{

constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.9,
        length:250
    }
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
}

display(){
var pointA = this.sling.bodyA.position
var pointB = this.sling.bodyB.position
    push()
    strokeWeight(3)
   line(pointA.x,pointA.y,pointB.x,pointB.y) 
   pop()
}

}