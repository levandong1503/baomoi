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
    let clsLayout = layout_drop.getAttribute("class");
    if( window.scrollY >elNav.offsetTop){
        elNav.setAttribute("class","nav-container fix"); 
        layout_drop.setAttribute("class", clsLayout.indexOf("fix")==-1?clsLayout+" fix":clsLayout);
    }else {
        elNav.setAttribute('class','nav-container'); 
        layout_drop.setAttribute("class", clsLayout.replace(" fix",""));
    }

}
 
window.addEventListener('scroll',fixNav)

//modal

const topicCards = document.querySelectorAll('.topic_card');
const closeIcon = document.querySelector('.close-icon'); 
const elModal = document.querySelector('.modal');

function showDetailTopic(e){
}

for (const card of topicCards) {
    card.addEventListener('click', (e) => {
       
    elModal.classList.add('open'); 
    e.stopPropagation()
    } )
    
}

closeIcon.addEventListener('click',(e) => elModal.classList.remove('open')
 )
