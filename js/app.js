/*
 * Archivo principal de JS
 */
 var modal = document.getElementById('myModal');
 var modalImg = document.getElementById("imgContent");
 var imgTitleCont = document.getElementById("imgTitle");
 var imgTextCont= document.getElementById("imgText");

 var img = document.getElementById('myImg');
 var img2 = document.getElementById('myImg2');
 var img3 = document.getElementById('myImg3');
 var img4 = document.getElementById('myImg4');
 var img5 = document.getElementById('myImg5');
 var img6 = document.getElementById('myImg6');

 img.onclick = function(){
     imgTitleCont.innerHTML = this.alt;
     imgTextCont.innerHTML = "<p>Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>";
     modal.style.display = "block";
     modalImg.src = this.src;
 }

 img2.onclick = function(){
     imgTitleCont.innerHTML = this.alt;
     modal.style.display = "block";
     modalImg.src = this.src;
 }

 img3.onclick = function(){
     imgTitleCont.innerHTML = this.alt;
     imgTextCont.innerHTML = "<p>Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>";
     modal.style.display = "block";
     modalImg.src = this.src;
 }

 img4.onclick = function(){
     imgTitleCont.innerHTML = this.alt;
     imgTextCont.innerHTML = "<p>Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>";
     modal.style.display = "block";
     modalImg.src = this.src;
 }

 img5.onclick = function(){
     imgTitleCont.innerHTML = this.alt;
     imgTextCont.innerHTML = "<p>Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>";
     modal.style.display = "block";
     modalImg.src = this.src;
 }

 img6.onclick = function(){
     imgTitleCont.innerHTML = this.alt;
     imgTextCont.innerHTML = "<p>Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>";
     modal.style.display = "block";
     modalImg.src = this.src;
 }

 // close
 var span = document.getElementsByClassName("close")[0];
 span.onclick = function() {
     modal.style.display = "none";
 }
