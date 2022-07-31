const dataFake = [{
        "img": "https://photo-baomoi.bmcdn.me/w700_r16x9/2022_07_29_65_43302763/76861929c36b2a35737a.jpg",
        "content": "Công an Hà Đông thông tin chi tiết vụ đâm xe liên hoàn làm 1 người chết",
        "logo": "./logos/bao-cand.png",
        "time": 1,
        "rel": "43 liên quan"
    },
    {
        "img": " ./Images/6-tau-lon-nuoc-ngoai-tham-gia-tim-kiem-thuyen-vien-binh-thuan-mat-tich.webp ",
        "content": "Ông Lê Tùng Vân đề nghị trả tự do cho các bị cáo",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 2,
        "rel": "907 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Tuyển Việt Nam vẫn được đá trên sân Mỹ Đình",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 3,
        "rel": "1 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Bộ GTVT chỉ đạo gấp liên quan đến việc xe bị tự động đăng ký sử dụng ePass",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 4,
        "rel": "163 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Châu Âu có lựa chọn mới về nguồn cung khí đốt tiềm năng - không phải từ Nga",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 5,
        "rel": "170 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "'Kẻ khóc, người cười' với kết quả kinh doanh của doanh nghiệp bất động sản",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 6,
        "rel": "2560 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Doanh nghiệp gia nhập và tái gia nhập thị trường lập kỷ lục mới",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 7,
        "rel": "3 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Người tử vong vụ ôtô gây tai nạn liên hoàn ở Hà Nội là quân nhân",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 8,
        "rel": "28 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Nga nêu điều kiện cho cuộc điện đàm giữa Ngoại trưởng Blinken - Lavrov",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 9,
        "rel": "12 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Tổng Bí thư: Tăng cường xây dựng, chỉnh đốn Đảng và hệ thống chính trị đáp ứng yêu cầu trong giai đoạn mới",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 10,
        "rel": "313 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Giận con gái, bố mua 15 lít xăng đốt chết 4 người trong gia đình",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 11,
        "rel": "10 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "7 tháng năm 2022, doanh nghiệp gia nhập và quay trở lại vượt mốc 130.000",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 12,
        "rel": "2 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "3 học sinh Hà Nội đoạt giải Nhất cuộc thi Đại sứ Văn hóa đọc năm 2022",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 13,
        "rel": "87 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Tiết lộ không gian âm nhạc 'khủng' nơi 4 ban nhạc huyền thoại quốc tế sẽ trình diễn tại Hà Nội",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 14,
        "rel": "6 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "7 tháng năm 2022: Xuất nhập khẩu hàng hóa đạt hơn 431 tỷ USD",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 15,
        "rel": "1147 liên quan"
    },
    {
        "img": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "content": "Công bố kết quả kỳ họp thứ III của Hội đồng Tư vấn Kinh doanh APEC",
        "logo": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "time": 16,
        "rel": "3 liên quan"
    }
]

const logos = ["bao-cand.png",
    "bao-giao-du-thoi-dai.png",
    "bao-ha-noi-moi.png",
    "bao-infonet.png",
    "bao-kt-dt.png",
    "bao-mot-the-gioi.png",
    "bao-nguoi-lao-dong.png",
    "bao-nhan-dan.png",
    "bao-petrol-time.png",
    "bao-phap-luat.png",
    "bao-qdnf.png",
    "bao-sao-star.png",
    "bao-suc-khoe-doi-song.png",
    "bao-the-gioi-viet-nam.png",
    "bao-tien-phong.png",
    "bao-tin-tuc.png",
    "bao-to-quoc.png",
    "bao-tri-thuc-cuoc-song.png",
    "bao-vietnam+.png",
    "bao-vietnam-daily.png",
    "bao-vietnamnet.png",
    "bao-vtc.png",
    "bao-zing.png",
    "sai-gon-online.png",
    "vov.png"
]

const imgs = ["6-tau-lon-nuoc-ngoai-tham-gia-tim-kiem-thuyen-vien-binh-thuan-mat-tich.webp ", 
    "7539c2d22590ccce9581.webp ",
    "bi-an-nhung-noi-tho-tu-tam-linh-cua-ha-noi-hon-3-thap-nien-truoc.webp ",
    "cang-odesa-trung-ten-lua.webp ",
    "chang-phi-cong-tre-hon-10-lan-hien-mau.webp ",
    "chong-sat-hai-vo-va-con-trai-roi-goi-dien-cong-an-dau-thu.webp ",
    "chu-tich-binh-dinh-giao-toan-bo-vu-lan-chiem-dat.webp ",
    "con-duong-cay-cuc-tan-an-do-dep-nhu-trang-giua-long-thu-do.webp ",
    "dai-dien-vks-dua-ra-quann-diem-giu-nguyen-cao-trang-try-to.webp ",
    "den-cho-hoi-an-kham-pha-thien-duong-am-thuc.webp ",
    "den-ninh-binh-dung-chi-song-ao-voi-hang-mua-hay-trang-an-ma-bo-qua.webp ",
    "den-quy-nhon-nam-thuyen-dao-choi-khi-rung-nuoc-dep-me-man - Copy - Copy.webp ",
    "dich-covid19-ngay-23-07-so-ca-khoi-benh-nhieu-gap-9-lna-so-ca-mac-moi - Copy - Copy.webp ",
    "diem-danh-nhung-toa-thap-noi-tieng-nhat-viet-nam - Copy - Copy.webp ",
    "gia-vang-mieng-tang-lai-gan-5-trieu-dong-luong - Copy - Copy.webp ",
   " giam-sat-ct-thu-hoi-gan-8000-hop-kem - Copy - Copy.webp ",
    "hai-anh-chang-mang-xeng - Copy - Copy.webp ",
    "hang-ngan-tui-thuoc-dieu-tri-sot-xuat-huyet-phai-bo-trong-khi-nhieu-noi-thieu-thuoc - Copy - Copy.webp ",
    "hoc-tap-va-lam-theo-tam-guong-dao-duc-ho-chi-minh - Copy - Copy.png",
    "hon-100-trieu-nguoi-my-chiu-can-nang-nong-nhu-thieu-dot - Copy - Copy.webp ",
    "hon-khoai-vien-ngoc-xanh-giua-troi-nam-to-quoc - Copy - Copy.webp ",
    "khongh-ngay-24-07-bo-giao-duc-cong-bo-diem-thi-tot-nghiep - Copy - Copy.webp ",
    "ky-thu-truot-thac-bach-ma-trong-mua - Copy - Copy.webp ",
    "lang-gom-thanh-ha-diem-to-net-dep - Copy - Copy.webp ",
    "luat-su-bao-chua-cho-cac-bi-cao-de-nghi-vo-toi-voi-cac-bi-cao - Copy - Copy.webp ",
    "ma-tuy-han-quoc - Copy - Copy.webp ",
    "miwon-phu-tho - Copy - Copy.webp ",
    "MSB-tang-von-len-20000-ty - Copy - Copy.webp ",
   " nang-nong-tai-anh-khien-may-chu-ngung-hoat-dong - Copy - Copy.webp ",
    "nghi-pham-vu-nguoi-phu-nu-tu-vung-thi-the-khong-nguyen-ven - Copy - Copy.webp ",
    "ngo-ngang-ve-dep-me-hoac-cua-canh-dong-dien-gio-tren-bien-quy-nhon - Copy - Copy.webp ",
    "ngoi-chua-dat-vang-co-lich-su-hon-600-nam-o-tra-vinh-nguy-nga-nhu-cung-dien - Copy - Copy.webp ",
    "ngoi-nha-tien-ty - Copy - Copy.webp ",
    "ngoi-nha-tien-ty-2 - Copy - Copy.webp ",
    "ngoi-nha-tien-ty-3 - Copy - Copy.webp ",
   " ngoi-nha-tien-ty-4 - Copy - Copy.webp ",
   " nguy-co-chet-nguoi-tu-trao-luu-lam-mat-tren-tik-tok - Copy - Copy.webp ",
   " nhung-doi-vo-chong-cung-lam-viec-thien - Copy - Copy.webp ",
   " nhung-hinh-anh-dau-tien-cua-4-ngu-dan-o-binh-thuan - Copy - Copy.webp ",
   " nong-huong-dan-moi-nhat-ve-thoi-gian-tiem-vaccine-covid-19 - Copy - Copy.webp ",
    "phao-tu-hanh-nga-1 - Copy - Copy.webp ",
    "phao-tu-hanh-nga-2 - Copy - Copy.webp ",
    "phao-tu-hanh-nga-3 - Copy - Copy.webp ",
    "phao-tu-hanh-nga-4 - Copy - Copy.webp ",
    "phi-cong-anh-16-tuoi-lai-may-bay-toi-viet-nam-trong-hanh-trinh-vong-quan-the-gioi - Copy - Copy.webp ",
    "quen-minh-cuu-nguoi-trong-bien-lua - Copy - Copy.webp ",
   " song-sat-bien-ho-cua-ninh-thuan-ban-da-tu-ghe-tham - Copy - Copy.webp ",
   " Sri Lanka-co-tong-thong-moi - Copy - Copy.webp ",
    "tho-sua-xe-lay-sieu-xe-ferrari-cua-khach-chay-roi-gap-nan-ai-phai-boi-thuong - Copy.webp ",
    "thu-tuong-pmc-tham-va-lam-viec-tai-vung-san-xuat-nong-nghiep-cong-nghe-cao-tinh-na - Copy.webp ",
    "thuyen-truong-tau-BTH-97478 - Copy.webp ",
    "tong-bi-thu-2 - Copy.webp ",
    "tphcm-thuong-nong-150tr-HCV-quoc-te - Copy.webp ",
    "ve-dep-ho-thac-ba - Copy.webp ",
    "vietnam-lao - Copy.jpg",
    "vu-thi-the-mot-phu-nu-khong-toan-ven-nghi-pham-gay-an-da-tu-tu - Copy.webp ",
   " xe-khach-cho-23-nguoi-lao-xuong-vuc - Copy.webp ",
    "xom-truong-tho-tai-an-giang - Copy.webp ",
    ] ;
const cardNewsEl = document.querySelector('.bm_L');

const app = {
    mergeLogo: function () {
        for (let i = 0; i < dataFake.length; i++) {
            const element = dataFake[i];
            element.logo = `./logos/${logos[i]}`;
        }
        console.log("merge", dataFake);
    },
    mergeImg: function(){
        for (let i = 0; i < dataFake.length; i++) {
            const element = dataFake[i];
            element.img = `./imgs/${imgs[i]}`
        }
    },

    renderVideo: function () {
        this.mergeImg();
        let html = '';
        html = html += dataFake.map((data, index) => (
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
                        ${data.rel!=''? `<a href="#"><span class="ml-12 fs-13 op-025 ">${data.rel} </span></a>`:''}
                    </div>
                </div>
            </div>`
        )).join();


        cardNewsEl.innerHTML = html


    },

    start:   function () {
        this.mergeLogo();
        this.renderVideo()
    }
}


app.start();