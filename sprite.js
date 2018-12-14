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


