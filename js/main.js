var xhr = new XMLHttpRequest();
var jsonobj;
(function getxhr() {
    xhr.open('GET',"json/data.json")
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            jsonobj = JSON.parse(xhr.responseText);
            console.log(jsonobj);
            display(getdiv,0);
            display(getdiv1,1);
            display(getdiv2,2);
        }
    }
})();
var getdiv = document.getElementById("mob"); 
var getdiv1 = document.getElementById("lap"); 
var getdiv2 = document.getElementById("pri"); 

function display(getd , ke) {
    for (var i=0; i<3; i++) {
        for (var j=0; j<1 ; j++){
            var crediv = document.createElement("div");
            var creimg = document.createElement("IMG"); 
            getd.appendChild(crediv);
            var key = Object.keys(jsonobj);
            crediv.setAttribute("class" , "wash");
            creimg.src = jsonobj[key[ke]][i][j].img;
            crediv.insertBefore( creimg , crediv.childNodes[0]);
            creimg.setAttribute("class" , "productimg");
            crediv.innerHTML += "<h3 onclick=product(this) id="+[ke,i,+" "+j]+">"+jsonobj[key[ke]][i][j].name+"</h3>"+"<p >"
            +jsonobj[key[ke]][i][j].price+" <del style=color:red>$20000.00</del></p>" 
            +"<button  class=btn onclick=addtocart(this) id="+[ke,i,+" "+j]+">Add to Cart</button>" ;
        }
    }
} 

function product(ele){
    localStorage.setItem('key', ele.id[0])
    localStorage.setItem('label', ele.id[2])
    localStorage.setItem('label1', ele.id[4])
    window.location.href = "../product/single-product.html";
    console.log(ele.id[0] )
    console.log(ele.id[2])  
}
var cont=0;
function addtocart(ele){
    localStorage.setItem('key0', ele.id[0])
    localStorage.setItem('cart' , ele.id[2])
    localStorage.setItem('cart1', ele.id[4])
    cont++;
    var getcont= document.getElementById("cart");
    getcont.innerHTML = cont;
    console.log(cont)
    alert("add successfully")
}