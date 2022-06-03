noseX = 0;
noseY = 0;

function preload() {

clown = loadImage("clown_nose.png");
goggle = loadImage("sunglasses.png");
hat = loadImage("hat.png");

}

function setup() {

    canvas = createCanvas(300,300) ;
    canvas.center() ;
    video = createCapture(VIDEO) ; 
    video.size(300,300) ;
    video.hide() ;

    posen = ml5.poseNet(video,modelloaded) ;
    posen.on('pose',getr);

}

    function modelloaded() {

        console.log("Posenet function is loaded successfully");

    }

    function getr(r) {

        if (r.length > 0) {

            console.log(r) ; 

            noseX = Math.floor(r[0].pose.nose.x);
            noseY = Math.floor(r[0].pose.nose.y);

            console.log(noseX);
            console.log(noseY);

        }


    }


function draw() {

    image(video,0,0,300,300);
    image(clown,noseX-24,noseY-20,50,50);
    image(goggle,noseX-50,noseY-80,100,100);
    image(hat,noseX-70,noseY-160,130,100);

}

function take_snapshot() {

    save('My_Filter_Image.png');

}