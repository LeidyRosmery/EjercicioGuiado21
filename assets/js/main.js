window.addEventListener('load',function(e) {
 for(var i=1; i<13 ; i++){
   var div=document.createElement("div");
   var fig=document.createElement("figure");
   var img1=document.createElement("img");
   img1.setAttribute("src","assets/img/img-"+i+".jpg");
   img1.setAttribute("alt","imagen-"+i);
   var caption=document.createElement("figcaption");
   caption.innerHTML="nombre del proyecto";
   fig.appendChild(img1);
   fig.appendChild(caption);
   div.appendChild(fig);
   document.getElementById("insertaImg").appendChild(div);
 }
});

document.getElementById("prueba").addEventListener("click" , function(){
  alert("funciona");
});
