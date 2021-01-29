class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/polygon.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y)
      imageMode(CENTER);
      image(this.image, 0,0, 80, 80)
    //  rect(pos.x, pos.y, this.width, this.height);
    }
  };