(function() {

element.addEventListener("touchstart", touchStart, false);
element.addEventListener("touchend", touchEnd, false);

function touchstart(event) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
};

function touchsend(event) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
};


}).call(this);




