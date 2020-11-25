class constraintt{
    constructor(bodyA,pnt){
        
        var options={
            bodyA: bodyA,
            pointB:pnt,
            stiffness:0.2,
            length:10
        }
        this.pointB=pnt;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

        }

       fly(){
            this.rope.bodyA=null;
       }
       attach(){
            this.rope.bodyA=body;
        }

        display(){
            //if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB= this.rope.pointB;
//changed here
            var Anchor1X=pointA.x;
		    var Anchor1Y=pointA.y;

		    var Anchor2X=pointB.x+this.offsetX;
            var Anchor2Y=pointB.y+this.offsetY;
            
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
           // }
        }
    
}