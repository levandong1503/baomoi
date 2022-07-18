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

fetch("https://localhost:44315/json").then(function(res) {
    return res.json;
}).then(function() {
    console.log(res);
})