var nav = document.getElementById("dropdown");
var dropLayout = document.querySelector(".nav-supper");
nav.onclick = function(){
    var cls = dropLayout.getAttribute("class");
    var index = cls.indexOf("dropsupport");
    if(index == -1){
        dropLayout.setAttribute("class","nav-supper dropsupport")
    }
    else{
        dropLayout.setAttribute("class","nav-supper")
    }
    console.log(dropLayout.getAttribute("class"));
}

// fix nav
let elNav = document.querySelector('.nav-container'); 
 
 
function fixNav() {
    if( window.scrollY >elNav.offsetTop){
        elNav.setAttribute("class","nav-container fix"); 
    }else {
        elNav.setAttribute('class','nav-container'); 
    }

}
 
window.addEventListener('scroll',fixNav)

//modal

const topicCards = document.querySelectorAll('.topic_card');
const closeIcon = document.querySelector('.close-icon'); 
const elModal = document.querySelector('.modal');

function showDetailTopic(){
    elModal.classList.add('open')
}

for (const card of topicCards) {
    card.addEventListener('click', showDetailTopic)
}

closeIcon.addEventListener('click',() => elModal.classList.remove('open'))
