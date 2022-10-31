let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

//-----------------------------------------
//context.fillStyle = "Blue";

//context.fillRect(300, 0, 100, 100);
//context.fillRect(100, 500, 100, 200);

//context.beginPath();
//context.strokeStyle = "red";
//context.lineWidth = 10;
//context.arc(100, 100, 50, 0, Math.PI * 2, false);
//context.stroke();
//context.closePath();

//---------------------------------------

let hit_counter = 0;

class Circle {
    constructor(xpos, ypos, rad, color, text, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.rad = rad;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }
    draw(context){
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.xpos, this.ypos);
        // What is next is just test
        //context.strokeText(this.text, this.xpos, this.ypos);

        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.rad, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }
    update() {

        //this.text = hit_counter;
        //context.clearRect(0, 0, window_width, window_height);
        this.draw(context);

        if ((this.xpos + this.rad) > window_width) {
            this.dx = -this.dx;
            //hit_counter++;
        }
        if ((this.xpos - this.rad) < 0) {
            this.dx = -this.dx;
            //hit_counter++;
        }



        if ((this.ypos + this.rad) > window_height) {
            this.dy = -this.dy;
            //hit_counter++;
        }

        if ((this.ypos - this.rad) < 0) {
            this.dy = -this.dy;
            //hit_counter++;
        }


        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

let getDis = function(xpos1, ypos1, xpos2, ypos2) {
    var result = Math.sqrt(Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos2, 2));
    return result;
}



let circle_counter = 1;
let all_circles = [];

//let random_x = Math.random() * window_width;
//let random_y = Math.random() * window_height;

//let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter, 10);

//let my_circle = new Circle(100, 100, 50, "black", circle_counter, 2);
let my_circle = new Circle(200, 300, 50, "black", "A", 2);
let my_circle2 = new Circle(300, 300, 100, "black", "B", 0);

console.log(getDis(my_circle.xpos, my_circle.ypos, my_circle2.xpos, my_circle2.ypos));


my_circle.draw(context);
my_circle2.draw(context);

let updateCircle = function() {
    requestAnimationFrame(updateCircle);
    context.clearRect(0, 0, window_width, window_height);
    my_circle.update();
    my_circle2.update();
}
updateCircle();

/*
let create = function(Circle) {
    Circle.draw(context);
}
*/



/*
for(var num = 0; num < 10; num ++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;
    let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter, 1);
    all_circles.push(my_circle);
    create(all_circles[num]);
    circle_counter++;
}
*/

//-----------------------------------------------------






