class Paper{
    constructor(x,y,options){
        options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.3
            
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("paper.png")
        World.add(world,this.body)
        
    }
    display(){
        
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
       
        
        pop();
        function keyPressed(){
            if (keyCode===UP_ARROW){
                Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:145})
            }
        }
    }


       
    








}