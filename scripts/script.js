window.onscroll = function() {
    const header = document.getElementById("navbar");
    var top = window.scrollY;

    if (top>=10){
        header.classList.add("header-scrolled");
    }
    else{
        header.classList.remove("header-scrolled");
    }
}
