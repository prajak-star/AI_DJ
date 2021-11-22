leftwristx="0";
leftwristy="0";
rightwristx="0";
rightwristy="0";
song=" ";

function preload(){
    
}

function setup(){
   canvas=createCanvas(600,400);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   posenet=ml5.poseNet(video,model_loaded);
   posenet.on("pose",bring);
}

function model_loaded(){
   console.log(" PoseNet is chalu ");
}

function bring(results){
    if (results.length > 0) {
        console.log(results);
   
    }
}