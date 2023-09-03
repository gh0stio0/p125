
function setup(){
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    video= createCapture(VIDEO)
    video.size(500,500)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model Has Been Loaded")
}
function gotPoses(result){
if(results.length>0){
    console.log(results)
    leftWristx=results[0].pose.leftWrist.x
    rightWristx=results[0].pose.rightWrist.x
}
}
function draw(){
  background("#6C91C2")
  textSize()
  fill("#FFEE787")
  text("Shreshta",50,200)
}
