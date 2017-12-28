
var rightBox_left_property = 0;
var rightBox_width_property = 100;
var leftBox_width_property = 100;

var intervalID;
var right_length = [85, 80, 70, 75, 65, 50, 55, 65, 75, 70, 80, 85];

function animate() {
    var r = document.getElementsByClassName("box_right");
    var l = document.getElementsByClassName("box_left");
    var str1 = rightBox_left_property + "%";
    var str2 = rightBox_width_property + "%";
    var str3 = leftBox_width_property + "%";
    var i;
    for (i = 0; i < r.length; i++) {
        if (rightBox_width_property > right_length[i]) {
            r[i].style.left = str1;
            r[i].style.width = str2;
            l[i].style.width = str3;
        }
    }
    rightBox_left_property += 1;
    rightBox_width_property -= 1;
    leftBox_width_property -= 1;

    if (rightBox_width_property <= 30) {
        clearInterval(intervalID);
    }
}


function myfunction() {
    animate();
    date_update();
    intervalID = setInterval(animate, 30);
}

window.onload = myfunction;


function myfunction1(x){
    var src = document.getElementsByClassName("option");
    var dst = document.getElementById("page-title");
    if(x===5){
        location.reload();
    }
    else{
    dst.innerHTML = src[x].innerHTML;
    }
}

function date_update(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.getFullYear();
}
