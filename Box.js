class Box {
  constructor(x,y,width,height)
  {
     var option={
      
          restitution: .8
        }

this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width
this.width = height
World.add(world,this.body);


  }

  display()
  
  {
      var pos =this.body.position

   rect(pos.x,pos.y,this.width,this.height);

  }


}