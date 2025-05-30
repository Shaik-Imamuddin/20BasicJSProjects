var count=0
var timer;
function timecount(){
    count++;
    count_no.innerHTML = count;
}
function start(){
    timer =setInterval(timecount,1000);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    count_no.innerHTML = "0";
    count=0;
}