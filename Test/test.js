let fakeJson = {
  img: "https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2022_07_19_106_43206521/95da1c05c2472b197256.jpg",
  title: "Máy bay chở khách lật ngửa trên đường băng",
  logo: "https://photo-baomoi.bmcdn.me/579c7af3a7b04eee17a1.png",
  time: "11 phút",
  rel: "33 liên quan",
};

const root = document.querySelector(".bm_L");

let textHTML = "";

for (let index = 0; index < 50; index++) {
  textHTML += `
        
<div class="bm_card d-flex">
<div class="bm_card_img img-hover-zoom">
    <span>
        <a href="#">
            <img class=""
                src="${fakeJson.img}"
                alt="">
        </a>
    </span>
</div>
<div class="bm_card_c">
    <div class="bm_card_c_title">
        <h4><a href="#">${fakeJson.title}</a></h4>
    </div>

    <div class="bm_card_c_logo">
        <a href="#">
            <img src="${fakeJson.logo}" alt="">
        </a>
        ${fakeJson.time ? `<span class="ml-12 fs-13 op-025 ">${fakeJson.time}</span>`: ''}
        
        ${fakeJson.rel !== '' ? `<span class="ml-12 fs-13 op-025 ">${fakeJson.rel}</span>`: ''}
    </div>
</div>
</div>
    ` ;
}
root.innerHTML = textHTML;
// <div class="bm_card_video_c_logo d-flex">
// <a href="#"><img
// src="https://photo-baomoi.bmcdn.me/e9b048137951900fc940.png"
// alt=""></a>


// </div>
