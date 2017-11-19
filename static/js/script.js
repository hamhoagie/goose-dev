(function() {

    var player = document.getElementById('goose');

    var handleSuccess = function(stream) {
    var context = new AudioContext();
    var source = context.createMediaStreamSource(stream);
    var processor = context.createScriptProcessor(1024, 1, 1);

    source.connect(processor);
    processor.connect(context.destination);


    processor.onaudioprocess = function(e) {
        //document.getElementById('goose').play();
        //var honkSound = new Audio('../../static/audio/goose_short.mp3');
        //honkSound.loop = false;
        //honkSound.play();
        //console.log(e.inputBuffer);
        }
     };





     //navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(handleSuccess);

}).call(this);
