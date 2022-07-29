var nav = document.getElementById("dropdown");
var dropLayout = document.querySelector(".nav-supper");
var isBodyHidden = false;
nav.addEventListener('click',  function(){
    var cls = dropLayout.getAttribute("class");
    var index = cls.indexOf("dropsupport");
    
    if(index == -1){
        dropLayout.setAttribute("class",cls + " dropsupport");
    }
    else{
        dropLayout.setAttribute("class",cls.replace(" dropsupport",""))
            
    }

    if(window.innerWidth < 970 && !isBodyHidden ){
        var body = document.getElementById("app");
       body.setAttribute("style","overflow:hidden");
       isBodyHidden = true;
        
    }
    else if(isBodyHidden){
        var body = document.getElementById("app");
       body.setAttribute("style","  ")
       isBodyHidden = false;
       
    }
    
}) 

// fix nav
let elNav = document.querySelector('.nav-container'); 
let layout_drop = document.querySelector('.nav-supper'); 

function fixNav() {
    let clsLayout = layout_drop.getAttribute("class");
    if( window.scrollY >elNav.offsetTop){
        elNav.setAttribute("class","nav-container fix"); 
        //layout_drop.setAttribute("class", clsLayout.indexOf("fix")==-1?clsLayout+" fix":clsLayout);
        if(window.innerWidth > 970){
            layout_drop.style.position = "fixed"
        }
        if(isBodyHidden){
            layout_drop.style.position="absolute";
        }
        
    }else {
        elNav.setAttribute('class','nav-container'); 
        //layout_drop.setAttribute("class", clsLayout.replace(" fix",""));
        layout_drop.style.position="absolute";
    }

}
 
window.addEventListener('scroll',fixNav)

//modal

const topicCards = document.querySelectorAll('.topic_card');
const closeIcon = document.querySelector('.close-icon'); 
const elModal = document.querySelector('.modal');

function showDetailTopic(e){
    if(elModal!=null){
        if(window.innerWidth>970){
            elModal.classList.add('open');
            e.preventDefault();
        }
    }
}

for (const card of topicCards) {
    card.addEventListener('click',e=> showDetailTopic(e))
     
}
 
closeIcon.addEventListener('click',() => elModal.classList.remove('open'));
 
