var nav = document.getElementById("dropdown");
var dropLayout = document.querySelector(".nav-supper");
nav.onclick = function(){
    var cls = dropLayout.getAttribute("class");
    var index = cls.indexOf("dropsupport");
    if(index == -1){
        dropLayout.setAttribute("class",cls + " dropsupport");
    }
    else{
        dropLayout.setAttribute("class",cls.replace(" dropsupport",""))
            
    }
    console.log(dropLayout.getAttribute("class"));
}

// fix nav
let elNav = document.querySelector('.nav-container'); 
let layout_drop = document.querySelector('.nav-supper');
function fixNav() {
    if( window.scrollY >elNav.offsetTop){
        elNav.setAttribute("class","nav-container fix"); 
        layout_drop.setAttribute("class","nav-supper fix")
    }else {
        elNav.setAttribute('class','nav-container'); 
        layout_drop.setAttribute("class","nav-supper")
    }

}
 
window.addEventListener('scroll',fixNav)
