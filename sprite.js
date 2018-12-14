var keyframes = [
    { backgroundPosition: "0 0" },
    { backgroundPosition: "0 1280px" }
  ];

  var timing = {
    duration: 750,
    iterations: Infinity,
  };


var tID;

function stopAnimate(){
    clearInterval(tID);
}

function ninjaWalk() {
  var position = 160
  const interval = 100
  const diff = 160

tID = setInterval(() => {
  document.getElementById("withNinja").style.backgroundPosition =
  `-${position}px 0px`;
  if (position < 1280) {
      position = position + diff;
  }
  else {
      position = 160;
  }
}, interval);
}

var ninjaWalk = document.getElementById("ninjaWalk").animate(keyframes, timing);
      var slowen = .5;
      var speeden = 2;

function speedAnimations(){
    var currentSpeed = ninjaWalk.playbackRate;
    ninjaWalk.playbackRate = currentSpeed * speeden;
}

function slowAnimations(){
    var currentSpeed = ninjaWalk.playbackRate;
    ninjaWalk.playbackRate = currentSpeed * slowen;
}



