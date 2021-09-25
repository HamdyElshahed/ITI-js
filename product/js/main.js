var xhr = new XMLHttpRequest();
var jsonobj;
var k=parseInt(localStorage.getItem("key"));
var i=parseInt(localStorage.getItem("label"));
console.log(i);
var j= parseInt(localStorage.getItem("label1"));
console.log(j);
(function getxhr() {
    xhr.open('GET',"data.json")
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            jsonobj = JSON.parse(xhr.responseText);
            console.log(jsonobj);
            var key = Object.keys(jsonobj);
            var getimage = document.querySelector('img[name="product"]'); 
            var getimage1 = document.getElementById("image");  
            var getname = document.getElementById("nm");   
            var getprice = document.getElementById("price");   
            getimage.src = jsonobj[key[k]][i][j].img;  
            getimage1.src = jsonobj[key[k]][i][j].img;   
            getname.innerHTML = jsonobj[key[k]][i][j].name;  
            getprice.innerHTML = jsonobj[key[k]][i][j].price;              
        }
    }
})();
var cont=0;
function addtocart(ele){
    localStorage.setItem("key0" , k)
    localStorage.setItem('cart' , i)
    localStorage.setItem('cart1', j)
    cont++;
    var getcont= document.getElementById("cart");
    getcont.innerHTML = cont;
    console.log(cont);
    alert("add successfully")
}