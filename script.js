var nav = document.getElementById("dropdown");
var dropLayout = document.querySelector(".nav-supper");
var isBodyHidden = false;
var isDropNav = false;
nav.addEventListener('click',  function(){
    var cls = dropLayout.getAttribute("class");
    var index = cls.indexOf("dropsupport");
    
    if(index == -1){
        dropLayout.setAttribute("class",cls + " dropsupport");
        isDropNav  = false;
    }
    else{
        dropLayout.setAttribute("class",cls.replace(" dropsupport",""))
        isDropNav = true;
            
    }

    if (window.innerWidth < 970 && !isBodyHidden) {
        var body = document.getElementById("app");
        body.setAttribute("style", "overflow:hidden");
        isBodyHidden = true;

    } else if (isBodyHidden) {
        var body = document.getElementById("app");
        body.setAttribute("style", "  ")
        isBodyHidden = false;

    }

})

window.onresize = function(){
    
    if(isDropNav && window.innerWidth< 970){
        var body = document.getElementById("app");
       body.setAttribute("style","overflow:hidden");
       isBodyHidden = true;
        //console.log("is body hidden: "+ isBodyHidden);
    }
    if(window.innerWidth >= 970){
        var body = document.getElementById("app");
       body.setAttribute("style","  ")
       isBodyHidden = false;
    }
}

var DropCloseBtn = document.getElementsByClassName("btn-close-drop");
DropCloseBtn[0].onclick = function() {
    if(isDropNav){
        var cls = dropLayout.getAttribute("class");
        dropLayout.setAttribute("class",cls + " dropsupport");
        isDropNav  = false;
        if(isBodyHidden){
            var body = document.getElementById("app");
            body.setAttribute("style","  ");
            isBodyHidden = false;
        }
    }
}


// fix nav
let elNav = document.querySelector('.nav-container');
let layout_drop = document.querySelector('.nav-supper');    

function fixNav() {
    let clsLayout = layout_drop.getAttribute("class");
   
    if( window.scrollY >elNav.offsetTop){
        elNav.setAttribute("class","nav-container fix"); 
        
        if(window.innerWidth > 970){
            
        }

    } else {
        elNav.setAttribute('class', 'nav-container');
        
       
    }

}


window.addEventListener('scroll', fixNav)

 
