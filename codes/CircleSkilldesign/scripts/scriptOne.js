
var startang = 0, endang = 0.2;
var finalAngles = [1.6, 1.7, 1.4, 1.8, 2.1, 1.5];
var colors = ["#102e5e", "#a83e15", "#931644", "#1cceb3", "#8615a8", "#25ce12"];
var lw = 3;
var radius = 60;
var intervalId;

function myfunc() {

  var c = document.getElementsByClassName("myCanvas");
  var d = document.querySelectorAll("div.container1  p.my-center");

  var i;
  for (i = 0; i < c.length; i++) {
    if (endang > finalAngles[i]) {
      var temp1 = finalAngles[i]*47.6;
      var temp2 = temp1.toFixed(0);
      d[i].innerHTML = temp2+"%";
      continue;
    }


    var ctx = c[i].getContext("2d");
    var x = c[i].width / 2;
    var y = c[i].height / 2;
    ctx.clearRect(0, 0, c[i].width, c[i].height);
    ctx.beginPath();
    ctx.arc(x, y, radius, startang * Math.PI, endang * Math.PI, false);

    ctx.lineWidth = lw;
    ctx.strokeStyle = colors[i];
    ctx.stroke();
    var v1 = endang*47.6;
    var percent = v1.toFixed(0);
    d[i].innerHTML = percent+"%";

  }
  endang += 0.05;
  if (endang > 2.2) {
    clearInterval(intervalId);

  }
}


function myfunc1() {
  var c = document.getElementsByClassName("myCanvas1");

  var i;
  for (i = 0; i < c.length; i++) {
    var ctx = c[i].getContext("2d");
    var x = c[i].width / 2;
    var y = c[i].height / 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0.001 * Math.PI, 0 * Math.PI, false);

    ctx.lineWidth = lw;
    ctx.strokeStyle = "#dbdde0";
    ctx.stroke();
  }

}




function start() {
  myfunc1();
  dateUpdate();
  myfunc();
  intervalId = setInterval(myfunc, 30);
}
window.onload = start;



function dateUpdate(){
  var d = new Date();
  document.getElementById("date").innerHTML=d.getFullYear();
}