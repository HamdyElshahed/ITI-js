var xhr = new XMLHttpRequest();
var jsonobj;
(function getxhr() {
    xhr.open('GET',"../../json/data.json")
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            jsonobj = JSON.parse(xhr.responseText);
            console.log(jsonobj);
            var getdiv = document.getElementById("one");           
            for (var i=0; i<jsonobj.mobile.length ; i++) {
                for (var j=0; j<jsonobj.mobile[i].length ; j++){
                    var crediv = document.createElement("div");
                    var creimg = document.createElement("IMG");
                    // getdiv.insertBefore( crediv , getdiv.childNodes[0]);
                    getdiv.appendChild(crediv);
                    crediv.setAttribute("class" , "div1child1mob");
                    creimg.src = jsonobj.mobile[i][j].img;
                    console.log(creimg);
                    crediv.insertBefore( creimg , crediv.childNodes[0]);
                    creimg.setAttribute("class" , "div1child1imgmob");
                    crediv.innerHTML += "<p onclick=product(this) id="+[0,i,+" "+j]+">"+jsonobj.mobile[i][j].name+"</p>"+"<h4 >"
                    +jsonobj.mobile[i][j].price+"</h4>" +"<button  class=btnmob onclick=addtocart(this) id="+[0,i,+" "+j]+">Add to Cart</button>" ;
                }
            }
        }
    }
})();
// var bc =new BroadcastChannel('main')
// var element ;
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

// var sum = jsonobj.mobile[[2]].length + jsonobj.mobile[[1]].length + jsonobj.mobile[[0]].length;
// console.log( jsonobj.mobile[[2]].length)
// console.log( jsonobj.mobile[2].length)
// console.log(sum);
// var j=0;
// for ( i = 0; i < sum ; i++ , j++) {
//     var lim=0 ;    
//     // if( i >= jsonobj.mobile[[0]].length){ lim = 1; }
//     switch (true) {
//         case i >= jsonobj.mobile[0].length:
//             lim = 1;
//             console.log(lim);
//             break;
//         case i >= jsonobj.mobile[[0]].length + jsonobj.mobile[[1]].length:
//             lim = 2;
//             console.log(lim);
//             break;
//         default:
//             lim = 0;
//             break;
//     }
//     console.log(lim)
//     while ( j < sum && j >= jsonobj.mobile[[0]].length){
//       if ( i == jsonobj.mobile[[0]].length ) { j = -1; }
//       if ( i == jsonobj.mobile[[1]].length) { j = -1; }
//     //    else{ lim = 0;}
//       j++;
//       console.log(j)
//     }
//     console.log(j)
//     var crediv = document.createElement("div");
//     var creimg = document.createElement("IMG");
//     getdiv.insertBefore( crediv , getdiv.childNodes[i]);
//     crediv.setAttribute("class" , "div1child1mob");
//     creimg.src = jsonobj.mobile[lim][j].img;
//     console.log(creimg);
//     crediv.insertBefore( creimg , crediv.childNodes[0]);
//     creimg.setAttribute("class" , "div1child1imgmob");
//     crediv.innerHTML += "<p>"+jsonobj.mobile[lim][j].name+"</p>"+"<h4>"+jsonobj.mobile[lim][j].price+"</h4>" 
//     +"<button onclick=alert('ertgergt') class=btnmob>Add to </button>" ;
    
// }