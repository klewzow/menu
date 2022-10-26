
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("including-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("including-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
includeHTML();
function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
          ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
  }
}
ibg();  

// document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector('.header__burger');
    burger.addEventListener('click', function () {
        document.querySelector('.header__burger-menu').classList.toggle("_active");
        document.querySelector('.header__burger').classList.toggle("_active");
    });
     
    
    function ibg() {

      let ibg = document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
          if (ibg[i].querySelector('img')) {
              ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
          }
      }
    }
ibg();   

// });

 




  


