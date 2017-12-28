

window.onload=date_update;


function date_update(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.getFullYear();
}