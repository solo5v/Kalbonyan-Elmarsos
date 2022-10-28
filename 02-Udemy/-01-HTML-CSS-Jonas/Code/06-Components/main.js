// GET P#CLICKING TO SHOW || HIDE
let container = document.getElementsByClassName("item");
let clicky    = document.getElementsByClassName("txt");
let hiddenBox = document.getElementsByClassName("hide-box");
let numHeader = document.getElementsByClassName("number");


for (let i =0; i < 4; i++) {



// event
clicky[i].onclick = function () {
  hiddenBox[i].classList.toggle("hide")
  
  if (hiddenBox[i].classList.contains("hide")){
      numHeader[i].classList.toggle("close-num-style");
      clicky[i].classList.toggle("close-style")
  } else {
    container[i].style.cssText = "border-top: 4px solid #087f5b;"
  }
}


clicky[i].onmouseover = function () {
  clicky[i].style.cursor = "pointer";

}
}