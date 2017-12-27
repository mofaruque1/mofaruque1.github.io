

var sq2_top = -5;
var sq2_height = 115;
var sq2_right = -6;
var speed = 8;

var skill_value=0;
var sq1_height = 115;

var intervalID;


function progress(){

    var i=0;
    var tp= sq2_top+"px";
    var hgt = sq2_height+"px";
    var rgt = sq2_right+"px";

    var skill_v1 = skill_value+7+"%";
    var skill_v2 = skill_value+10+"%";
    var skill_v3 = skill_value+16+"%";
    var skill_v4 = skill_value+22+"%";
    var skill_v5 = skill_value+34+"%";

    var x = document.getElementsByClassName("sq2");


    for(i=0;i<x.length;i++){
        x[i].style.top=tp;
        x[i].style.height=hgt;
        x[i].style.right=rgt;
    }
    


    document.getElementById("text1").innerHTML = skill_v1;
    document.getElementById("text2").innerHTML = skill_v2;
    document.getElementById("text3").innerHTML = skill_v3;
    document.getElementById("text4").innerHTML = skill_v4;
    document.getElementById("text5").innerHTML = skill_v5;
    skill_value +=3;
    if(sq2_top<63){
    sq2_top +=speed;
    sq2_height -=speed;
    }
    if(sq2_top>=63 && sq2_right<100){
        
        sq2_right +=speed;
    }
    if(sq2_right>=50){
        progress_sq1();
    }
}


function progress_sq1(){
    var i=0,incr=0;
    var y = document.getElementsByClassName("sq1");
    for(i =0; i<y.length;i++){
        y[i].style.height=sq1_height-incr+"px";
        if(i==3){
            incr +=30;
            continue; 
        }
        incr +=7;
    }


    sq1_height -=speed;
    if(sq1_height<=45){
        clearInterval(intervalID);
    }
}



function myfunctionOne(){
    progress();
    date_update();
    intervalID=setInterval(progress,10);
}

window.onload=myfunctionOne;

function myFunction() {
    location.reload();
}


function date_update(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.getFullYear();
}