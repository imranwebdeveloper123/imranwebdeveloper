
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("mySidenav").style.paddingTop = "60px";
  //  document.getElementsByClassName("closebtn").style.display = "block"


}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";

}
// jaquary javascript

$('.toggle-menu-custom').click(function () {
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});

$('.mobileNav').click(function () {
  $('#menu').toggleClass('open');
  $(".toggle-menu-custom").removeClass("active");
});

var hello = document.getElementById("portfolioProject1");
hello.onclick = function () {
  window.location.href = "https://github.com/imranwebdeveloper123/imranwebdeveloper/projectview0.html";
};
var hello2 = document.getElementById("portfolioProject2");
hello2.onclick = function () {
  window.location.href = "https://github.com/imranwebdeveloper123/imranwebdeveloper/projectreview2.html";
};

var hello1 = document.getElementById("internetWebsite");
hello1.onclick = function () {
  window.location.href = "https://github.com/imranwebdeveloper123/imranwebdeveloper/projectreview1.html";
};

var hello5 = document.getElementById("my-work-btn");
hello5.onclick = function () {
  window.location.href = "#myworks";
};


var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});poftfolioProject
