class PlayerArcher{
    constructor(x, y, width, height, angle){
    this.body = Bodies.rectangle(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image= loadImage("assets/playerArcher.png");
    
    }
    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle<-1.2){
            this.angle+=0.01;
        }
        if (keyIsDown(LEFT_ARROW) && this.angle>-1.7){
            this.angle-=0.01;
        }
push();
translate(this.x, this.y);
rotate(this.angle);

image(this.image, 0, 0, this.width, this.height);
pop();
    }
}