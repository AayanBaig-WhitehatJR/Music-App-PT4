bensound1 = ""
beatles = ""
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
currentSong = ""
function preload(){
    bensound1 = loadSound("bensound-creativeminds.mp3")
beatles = loadSound("Let It Be (Remastered 2009).mp3")
}
function setup(){
canvas = createCanvas(600, 500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotResult)
}
function modelLoaded(){
    console.log("Model has been loaded.")
}
function gotResult(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("Left Wrist X: " + leftWristX + " | Left Wrist Y: " + leftWristY)
        rightWristX = results[0].pose.rightWrist.x 
    rightWristY = results[0].pose.rightWrist.y
console.log("Right Wrist X: " + rightWristX + " | Right Wrist Y: " + rightWristY)
    }
}
function draw(){
image(video, 0, 0, 600, 500)
if(results[0].pose.keypoints[9].score > 0.2){
fill("#3295a8")
stroke("#00d6ff")
circle(leftWristX, leftWristY, 20)
circle(rightWristX, rightWristY, 20)
song.stop(bensound1)
if(beatles = false){
    if(leftWristY > 0){
        beatles.setVolume(0.6)
        beatles.rate(1)
        beatles.play()
    }
}
  }
    }