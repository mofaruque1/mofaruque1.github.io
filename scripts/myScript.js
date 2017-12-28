






function dateUpdate(){
  var x = document.getElementById("date");
  var d = new Date();
  x.innerHTML = d.getFullYear();
}

function run_all_function(){
    dateUpdate();
    console.log(document.readyState);
}


window.onload=run_all_function;

