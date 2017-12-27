

function dateUpdate(){
  var x = document.getElementById("date");
  var d = new Date();
  x.innerHTML = d.getFullYear();
}

function run_all_function(){
    dateUpdate();
}


window.onload=run_all_function;

