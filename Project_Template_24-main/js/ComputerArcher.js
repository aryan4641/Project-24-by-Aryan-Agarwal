class ComputerArcher{
    constructor(x, y,width,height,angle){
    this.body = Bodies.rectangle(x, y, width, height);
    this.image= loadImage("assets/computerArcher.png");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    
    }
    display() {
if (keyIsDown(UP_ARROW) && this.angle<1.77){
    this.angle+=0.1;
}else{
    this.angle-=0.1;
}
if (keyIsDown(DOWN_ARROW) && this.angle>1.47){
    this.angle-=0.1;
}else{
    this.angle+=0.1;
}
push();
translate(this.x, this.y);
rotate(this.angle);
image(this.image, 0, 0, this.width, this.height);
pop();
    }
}