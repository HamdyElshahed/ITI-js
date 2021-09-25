var xhr = new XMLHttpRequest();
var jsonobj;
var k = parseInt(localStorage.getItem("key0"));
var i=parseInt(localStorage.getItem("cart"));
console.log(i);
var j= parseInt(localStorage.getItem("cart1"));
console.log(j);
(function getxhr() {
    xhr.open('GET',"data.json")
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            jsonobj = JSON.parse(xhr.responseText);
            var key = Object.keys(jsonobj);
            console.log(jsonobj);
           var gettabrow =  document.getElementById("tablerow");
           var settabrow = document.createElement("tr");
           settabrow.innerHTML +=
           "<td>1</td><td> <a href=#><img id=imagecont></a></td><td><button><a href=#>-</a></button> <button><a href=#>1</a></button><button><a href=#>+</a></button> </td><td> "
           +jsonobj[key[k]][i][j].name+"</td><td>"
           +jsonobj[key[k]][i][j].price+"</td><td> <button class=btnlast><a href=#>X</a></button></td> "
           gettabrow.appendChild(settabrow); 
           var getimagecont = document.getElementById("imagecont");
           getimagecont.src = jsonobj[key[k]][i][j].img;      
        }
    }
})();