var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var strNum;
function drawNumbers(strNum){
    ctx.fillStyle="red";
    ctx.font="50px Georgia";
    ctx.fillText(strNum,0,canvas.clientHeight-20);
}
var n1,n2,n3;
var interval;
strNum="0:0:0";
document.getElementById('start').onclick = function(){
    startButton(interval);
}
document.getElementById('stop').onclick = function(){
    clearInterval(begin);
}

document.getElementById('reset').onclick = function(){
    resetButton();
}

drawNumbers(strNum);
var begin;
n1=0;
n2=0;
n3=0;
function startButton(){
    begin = setInterval(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        n1++;
        if(n1%60==0){
            n1=0;
            ++n2;
            if(n2%60==0){
                ++n3;
                n2=0;
            }
        }
        strNum=n3.toString()+":"+n2.toString()+":"+n1.toString();
        drawNumbers(strNum);
    },1000);  
}

function stopButton(stop){
    clearInterval(stop);
}

function resetButton(){
    stopButton(begin);
    n1=0;
    n2=0;
    n3=0;
    strNum=n3.toString()+":"+n2.toString()+":"+n1.toString();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNumbers(strNum);
}