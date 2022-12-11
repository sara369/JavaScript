//Select the canvas element
let theCanvas = document.getElementById("our-canvas"),
    //Select the context type
    theContext = theCanvas.getContext('2d'),

    w = theCanvas.clientWidth,
    h = theCanvas.clientHeight;


//begin the path
theContext.beginPath();

//Select the start position
theContext.moveTo(0,0);

//Select the path points

theContext.lineTo(w/2, 100);

//Adjust style and line width

theContext.strokeStyle = "#00f";
theContext.lineWidth = 5;

//Draw the path

theContext.stroke();

//begin the path
theContext.beginPath();

//Select the start position
theContext.moveTo(w,0);

//Select the path points

theContext.lineTo(w/2, 100);

//Adjust style and line width

theContext.strokeStyle = "#00f";
theContext.lineWidth = 5;

//Draw the path

theContext.stroke();















//Set the font
// theContext.font = '30px Tahoma';

//raw chart columns

// theContext.fillStyle = "#d35400";
// theContext.fillRect(50, 50, 60, h-50)
// theContext.fillStyle = "#fff";
// theContext.fillText("1", 70, h-15)

// theContext.fillStyle = "#16a085";
// theContext.fillRect(150, 100, 60, h-100)
// theContext.fillStyle = "#fff";
// theContext.fillText("2", 170, h-15)

// theContext.fillStyle = "#8e44ad";
// theContext.fillRect(250, 80, 60, h-80)
// theContext.fillStyle = "#fff";
// theContext.fillText("3", 270, h-15)





//     theGradient = theContext.createLinearGradient(0, 0, 350, 0);


// theGradient.addColorStop(0, 'red');
// theGradient.addColorStop(1, 'blue');


// let theImage = document.getElementById('our-image');
// let thePattern = theContext.createPattern(theImage, 'repeat')


// theContext.fillStyle = thePattern;
// theContext.fillRect(0, 0, theCanvas.width, theCanvas.height)

// theContext.lineWidth = 10;
// theContext.strokeStyle = theGradient;
// theContext.strokeRect(0, 0, theCanvas.width, theCanvas.height);

// theContext.font = "22px Arial";
// theContext.fillStyle = theGradient;
// theContext.fillText('Hello Canvas', 30, 30);

