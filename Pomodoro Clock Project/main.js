var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var video = document.getElementById('video');

var audio = new Audio("file:///Users/aidanchadha/Desktop/VS%20Code%20Practice%20Work/Pomodoro%20Clock/microwave-timer-117077.mp3")

var workMinute30 = document.getElementById("30")
var workMinute25 = document.getElementById("25")
var workMinute15 = document.getElementById("15")

var breakMinute15 = document.getElementById("15b")
var breakMinute10 = document.getElementById("10")
var breakMinute5 = document.getElementById("5")

var fullscreenButton = document.getElementById("fullscreen-button");

var selectedTime;

var lastWorkMinutesSelected;
var lastBreakMinutesSelected;

//store a reference to a timer variable
var startTimer;


//function to make it fullscreen
fullscreenButton.addEventListener('click', function() {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e)
    });
});
//function to stop a sound
function stopSound() {
    audio.pause();
}
//function to play a sound
function playSound() {
    audio.play();
    setTimeout(stopSound, 2000);
}


//changing the time from the work time and break time buttons
workMinute30.addEventListener('click', function() {
    lastWorkMinutesSelected = 30
    wm.innerText = 30
    ws.innerText = "00"
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});

workMinute25.addEventListener('click', function() {
    lastWorkMinutesSelected = 25
    wm.innerText = 25
    ws.innerText = "00"
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});

workMinute15.addEventListener('click', function() {
    lastWorkMinutesSelected = 15
    wm.innerText = 15
    ws.innerText = "00"
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});

breakMinute15.addEventListener('click', function() {
    lastBreakMinutesSelected = 15;
    bm.innerText = 15
    bs.innerText = "00"
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});

breakMinute10.addEventListener('click', function() {
    lastBreakMinutesSelected = 10;
    bm.innerText = 10
    bs.innerText = "00"
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});

breakMinute5.addEventListener('click', function() {
    lastBreakMinutesSelected = 5;
    bm.innerText = 5
    bs.innerText = "00"
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    if (lastWorkMinutesSelected) {
        wm.innerText = lastWorkMinutesSelected;
        ws.innerText = "00";
    } else {
        wm.innerText = 25;
        ws.innerText = "00";
    }
    if (lastBreakMinutesSelected) {
        bm.innerText = lastBreakMinutesSelected;
        bs.innerText = "00"
    } else {
        bm.innerText = 5;
        bs.innerText = "00";
    }
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
        ws.innerText = ws.innerText.toString().padStart(2, '0');
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        playSound();
        if(bs.innerText != 0){
            bs.innerText = parseInt(bs.innerText)
            bs.innerText--;
            bs.innerText = bs.innerText.toString().padStart(2, '0');
        } else if(bm.innerText != 0 && bs.innerText == 0){
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