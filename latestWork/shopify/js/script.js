



function inputCheck(){
   
    var inpObj = document.getElementById("id-email");
    if(!inpObj.checkValidity()){
        document.getElementById("warning-md-sc").innerHTML=inpObj.validationMessage;
        document.getElementById("warning-xs-sc").innerHTML=inpObj.validationMessage;
        
    }
}



var myBtn = document.getElementById("btn");
myBtn.onclick=inputCheck;