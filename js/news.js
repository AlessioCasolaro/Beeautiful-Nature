// Get the modal
var modal1 = document.getElementById("modalNews1");
var modal2 = document.getElementById("modalNews2");
var modal3 = document.getElementById("modalNews3");
var modal4 = document.getElementById("modalNews4");
// Get the button that opens the modal
var btn = document.getElementById("news-button1");
var btn2 = document.getElementById("news-button2");
var btn3 = document.getElementById("news-button3");
var btn4 = document.getElementById("news-button4");
// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");

var desktop = document.getElementById("desktop");
var desktop2 = document.getElementById("desktop2");
var news = document.getElementById("newsDiv");
var news2 = document.getElementById("newsDiv2");
// When the user clicks the button, open the modal 

window.onresize = whatDevice;
function whatDevice() {
  if (window.innerWidth < 1300) {
    desktop.remove();
    desktop2.remove();
  }
  else
    if (window.innerWidth > 1300) {
      news.appendChild(desktop);
      news2.appendChild(desktop2);
    }
}

btn.onclick = function () {
  modal1.style.display = "block";
}

btn2.onclick = function () {
  modal2.style.display = "block";
}

btn3.onclick = function () {
  modal3.style.display = "block";
}

btn4.onclick = function () {
  modal4.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
}

span2.onclick = function () {
  modal2.style.display = "none";
}

span3.onclick = function () {
  modal3.style.display = "none";
}

span4.onclick = function () {
  modal4.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
}