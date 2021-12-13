noseX = 0;
noseY = 0;

function preload(){
    reindeer = loadImage("https://i.postimg.cc/4y6Y0RtL/111-1116941-antler-clipart-single-transparent-reindeer-antlers-png-png-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-85;
        noseY = results[0].pose.nose.y-200;
        console.log("nose x = " + noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video,0,0,400,400);
    image(reindeer,noseX,noseY,150,150);
}

function take_snapshot(){
    save("santahat.png");
}

