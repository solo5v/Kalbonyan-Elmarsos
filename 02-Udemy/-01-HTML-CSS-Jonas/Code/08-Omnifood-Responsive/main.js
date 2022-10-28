let toggleMenu = document.getElementsByClassName("btn-mobile-nav")[0];

    let parent = document.getElementsByClassName("header")[0];

toggleMenu.onclick = function () {

    parent.classList.contains("nav-open") ?
    parent.classList.remove("nav-open")
    : parent.classList.add("nav-open")
    // parent.classList.add("nav-open")
}