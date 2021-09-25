var xhr = new XMLHttpRequest();
(function getxhr() {
    xhr.open('GET',"data.json")
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            jsonobj = JSON.parse(xhr.responseText);
            console.log(jsonobj);
            var getdiv = document.getElementById("one");
            for ( i = 0; i < jsonobj.lap[[1]].length ; i++ ) {
                var crediv = document.createElement("div");
                var creimg = document.createElement("IMG");
                getdiv.insertBefore( crediv , getdiv.childNodes[i]);
                crediv.setAttribute("class" , "div1child1mob");
                creimg.src = jsonobj.lap[1][i].img;
                console.log(creimg);
                crediv.insertBefore( creimg , crediv.childNodes[0]);
                creimg.setAttribute("class" , "div1child1imgmob");
                crediv.innerHTML += "<p onclick=product(this) id="+[1,1,+" "+i]+">"+jsonobj.lap[1][i].name+"</p>"+"<h4>"+jsonobj.lap[1][i].price+"</h4>" 
                +"<button  class=btnmob onclick=addtocart(this) id="+[1,1,+" "+i]+">Add to Cart</button>" ;
                
            }
        }
    }
})();
function product(ele){
    localStorage.setItem('key', ele.id[0])
    localStorage.setItem('label', ele.id[2])
    localStorage.setItem('label1', ele.id[4])
    window.location.href = "../../product/single-product.html";
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
    console.log(cont);
    alert("add successfully")
}