const dataFake = [{
        "img": "https://photo-baomoi.bmcdn.me/w300_r3x2/2022_07_22_83_43241273/81b562ffbdbd54e30dac.jpg",
        "content": "Thầy dạy lái hot nhất cộng đồng mạng chỉ ra sai lầm trong vụ Ferrari đâm gốc cây",
        "logo": "https://photo-baomoi.bmcdn.me/6eede58338c0d19e88d1.png",
        "time": "1",
        "rel": ""
    },
    {
        "img": "https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2022_07_22_293_43241144/e962cf2a1068f936a079.jpg",
        "content": "5 vấn đề chờ tân Chủ tịch UBND TP Hà Nội Trần Sỹ Thanh giải quyết",
        "logo": "https://photo-baomoi.bmcdn.me/d59db7f26ab183efdaa0.png",
        "time": "2",
        "rel": "3"
    },
    {
        "img": "https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2022_07_22_119_43241118/94eef9a626e4cfba96f5.jpg",
        "content": "Lâm Chí Dĩnh bị chấn thương sọ não, vỡ xương mặt",
        "logo": "https://photo-baomoi.bmcdn.me/e9b048137951900fc940.png",
        "time": "3",
        "rel": ""
    }
]

 

const cardNewsEl = document.querySelector('.bm_L');
let html = ''
for (let index = 0; index < 10; index++) {
     html = html+= dataFake.map((data, index) => (
        ` <div class="bm_card d-flex">
        <div class="bm_card_img img-hover-zoom">
            <span>
                <a href="#">
                    <img class=""
                        src=${data.img}
                        alt="">
                </a>
            </span>
        </div>
        <div class="bm_card_c">
            <div class="bm_card_c_title">
                <h4><a href="#">${data.content}</a></h4>
            </div>
    
            <div class="bm_card_c_logo">
                <a href="#">
                    <img src=${data.logo} alt="">
                </a>
                ${data.time!=''? `<span class="ml-12 fs-13 op-025 ">${data.time} phút</span>`:''}
                ${data.rel!=''? `<a href="#"><span class="ml-12 fs-13 op-025 ">${data.rel} liên quan</span></a>`:''}
            </div>
        </div>
    </div>`
    )).join();
}




cardNewsEl.innerHTML = html
