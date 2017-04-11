/*window.addEventListener('load',function(e) {
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
});*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
