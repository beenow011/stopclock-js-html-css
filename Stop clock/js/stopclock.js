
var sec = 00;
var min = 00;
var appendMinute = document.getElementById("minute");
var appendSeconds = document.getElementById("seconds");
var appendSTart = document.getElementById("btn");
// var bodyclr = document.querySelector("body");
var appendstop;
var interval;
let temp = 0;
// var appendTens = document.getElementById("Tens"); 

// appendSTart.onclick=alert("hello");


function startTimer() {
    sec++;

    if (sec < 9) {
        appendSeconds.innerHTML = "0" + sec;
    }
    if (sec > 9) {
        appendSeconds.innerHTML = sec;
    }
    if (sec > 60) {
        min++;
        appendMinute.innerHTML = "0" + min;
        sec = 0;
        appendSeconds.innerHTML = "0" + 0;

    }
    if (min > 9) {
        appendSeconds.innerHTML = sec;
    }

}

appendSTart.onclick = function start() {
    // bodyclr.classList.toggle("newbody");
    interval = setInterval(startTimer, 1000);
    appendSTart.innerHTML = "Stop";

    appendSTart.onclick = function () {


        clearInterval(interval);
        appendSTart.innerHTML = "Start";

        appendSTart.onclick = function () {
            sec = 0;
            min = 0;

            appendMinute.innerHTML = "0" + 0;
            appendSeconds.innerHTML = "0" + 0;

            appendSTart.onclick = start();

        };


    };

};



