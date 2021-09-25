 var loginform =document.getElementById("loginform");
 var regform =document.getElementById("regform");
 var line=document.getElementById("line");

 function login(){
     regform.style.transform="translateX(400px)";
     loginform.style.transform="translateX(400px)";
     line.style.transform="translateX(-10px)"

 }

 function register(){
    regform.style.transform="translateX(0px)";
    loginform.style.transform="translateX(0px)";
    line.style.transform="translateX(100px)";
}

//-----------------------------------------------------------------------------

var date = new Date();
date.setMonth(date.getMonth() + 3)

regform.onsubmit=function(){
    document.cookie="username="+regform[0].value+";expires="+date+";";
    document.cookie="eamil="+ regform[1].value+";expires="+ date+";";
    document.cookie="password="+regform[2].value+";expires="+date+";";

    localStorage.setItem("registration",1);
}

function getCookie(){
    var cooki_arr=[]
    var sp_cooki =document.cookie.split(";");

    for(var i=0; i<sp_cooki.length; i++)
    {
      cooki_arr[sp_cooki[i].split("=")[0].trim()]=sp_cooki[i].split("=")[1].trim();
    }
    return cooki_arr;
}


 loginform.onsubmit = function(e){

    var arr = getCookie();
    
    if(arr["username"] != loginform[0].value  || arr["password"] != loginform[1].value){
        document.getElementById("msg1").innerText = "You Entred wrong UserName or Password";
       e.preventDefault();
    }
    else{
        document.getElementById("msg1").innerHTML ="";
        localStorage.setItem("registration",1);


    }


 }