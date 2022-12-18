var start = document.getElementById('start');
var stop = document.getElementById('pause');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var startTimer;
var audio = new Audio('file:///Users/aidanchadha/Desktop/VS%20Code%20Practice%20Work/JavaScript%20Projects/Pomodoro%20Clock/ding-ding-sound-effect/ding-ding-sound-effect.mp3');

function stopAudio() {
    audio.stop();
}
function playSound() {
    audio.play();
    setTimeout(stopAudio, 1500);
  };

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText = parseInt(ws.innerText)
        ws.innerText--;
        ws.innerText = ws.innerText.toString().padStart(2, '0')
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = parseInt(ws.innerText)
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        playSound();
        if(bs.innerText != 0){
            bs.innerText = parseInt(bs.innerText)
            bs.innerText--;
            bs.innerText = bs.innerText.toString().padStart(2, '0')
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = parseInt(bs.innerText)
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        playSound();
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}