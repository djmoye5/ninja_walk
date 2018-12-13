var keyframe1 = [
    { left: "0px" },
    { left: "200px" }
];

var keyframe2 = [
    { left: "0px" },
    { left: "400px" }
];

var keyframe3 = [
    { left: "0px" },
    { left: "600px" }
];

var timing = {
    duration: 1000,
    easing: "ease-in"
  };

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

function hoverALL(){
box1.animate(keyframe1, timing);
box2.animate(keyframe2, timing);
box3.animate(keyframe3, timing);
}

function hover1(){
    box1.animate(keyframe1, timing);
}

function hover2(){
    box2.animate(keyframe2, timing);
}

function hover3(){
    box3.animate(keyframe3, timing);
}
