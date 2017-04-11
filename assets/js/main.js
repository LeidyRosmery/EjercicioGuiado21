window.addEventListener('load', function(e) {
    for (var i = 1; i < 13; i++) {
        var div = document.createElement("div");
        //div.setAttribute("class","modal");
        var fig = document.createElement("figure");
        var img1 = document.createElement("img");
        img1.setAttribute("src", "assets/img/img-" + i + ".jpg");
        img1.setAttribute("alt", "imagen-" + i);
        var caption = document.createElement("figcaption");
        caption.innerHTML = "nombre del proyecto";
        fig.appendChild(img1);
        fig.appendChild(caption);
        div.appendChild(fig);
        document.getElementById("insertaImg").appendChild(div);
        img1.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    }
});


var miSeccion = document.getElementById("insertaImg");
var modal = document.getElementById('myModal');
var miTexto = document.getElementById("textoImagen");
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

// img.addEventListener('click',mostrarModal());

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
