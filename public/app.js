var min=0;
var sec=0;
var msec=0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading= document.getElementById("msec");

var interval;
function timer(){
    msec++
    msecheading.innerHTML=msec;

    if(msec >=100){
    sec++
    secheading.innerHTML=sec
    msec=0;
}
    else if(sec >=60)
{
    min++;
    sec0;
    minheading.innerHTML=min;
}


}
function reset (){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min
    secheading.innerHTML = sec
    msecheading.innerHTML = msec
        
}


function play(){


interval=setInterval(timer,10);
}


function pause(){

clearInterval(interval);
}

function reset()
{
    clearInterval(interval);
    msec=0;
    sec=0;
    min=0;
    msecheading.innerHTML="00";

    secheading.innerHTML="00";
    minheading.innerHTML="00";
}