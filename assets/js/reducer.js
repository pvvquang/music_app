import { ele } from "./connectElement.js";
const elements = ele;
console.log(ele);
const init = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Rồi tới luôn",
      singer: "Nal",
      path: "./assets/mp3/RoiToiLuon-Nal-7064237.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/9/e/e/a9ee81fdd1c2b569c1c9631e969ea0aa.jpg",
    },
    {
      name: "3107 3",
      singer: "W/N,Duongg,Nâu,Titie",
      path: "./assets/mp3/31073-WNDuonggNautitie-7059323.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076.jpg",
    },
    {
      name: "Thức Giấc",
      singer: "Da LAB",
      path: "./assets/mp3/ThucGiac-DaLAB-7048212.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/07/14/8/c/f/9/1626231010810.jpg",
    },
    {
      name: "Độ Tộc 2",
      singer: "Masew,Pháo,Phúc Du,Phùng Thanh Độ",
      path: "./assets/mp3/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/08/08/f/a/f/b/1628385536495.jpg",
    },
    {
      name: "Muộn Rồi Mà Sao Còn",
      singer: "Sơn Tùng M-TP",
      path: "./assets/mp3/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/04/29/9/1/f/8/1619691182261.jpg",
    },
    {
      name: "Sao Ta Ngược Lối",
      singer: "Đình Dũng",
      path: "./assets/mp3/SaoTaNguocLoi-DinhDung-7052177.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/07/21/7/0/f/8/1626843874820.jpg",
    },
    {
      name: "Sài Gòn Đau Lòng Quá",
      singer: "Hứa Kim Tuyền,Hoàng Duyên",
      path: "./assets/mp3/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/03/27/d/2/9/1/1616859493571.jpg",
    },
    {
      name: "Phận Duyên Lỡ Làng",
      singer: "Phát Huy T4,Truzg",
      path: "./assets/mp3/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/04/14/c/3/3/b/1618383513976.jpg",
    },
    {
      name: "Có Hẹn Với Thanh Xuân",
      singer: "MONSTAR",
      path: "./assets/mp3/cohenvoithanhxuan-MONSTAR-7050201.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/07/16/f/4/9/8/1626425507034.jpg",
    },
    {
      name: "Câu Hẹn Câu Thề",
      singer: "Đình Dũng,ACV",
      path: "./assets/mp3/CauHenCauThe-DinhDung-6994741.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/03/29/2/2/1/e/1617029681297.jpg",
    },
    {
      name: "Vách Ngọc Ngà",
      singer: "Anh Rồng",
      path: "./assets/mp3/VachNgocNga-AnhRong-6984991.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/03/25/0/b/f/e/1616662504016.jpg",
    },
    {
      name: "Phải Chăng Em Đã Yêu?",
      singer: "Juky San,RedT",
      path: "./assets/mp3/PhaiChangEmDaYeu-JukySanRedT-6940932.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/02/10/6/5/a/6/1612954164434.jpg",
    },
    {
      name: "Trắc Trở",
      singer: "X2X",
      path: "./assets/mp3/TracTro-X2X-7040184.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/06/28/8/4/3/c/1624872522478.jpg",
    },
    {
      name: "Gặp Gỡ, Yêu Đương Và Được Bên Em",
      singer: "Phan Mạnh Quỳnh",
      path: "./assets/mp3/GapGoYeuDuongVaDuocBenEm-PhanManhQuynh-7061898.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/08/08/2/9/5/8/1628404241673.jpg",
    },
    {
      name: "Níu Duyên",
      singer: "Lê Bảo Bình",
      path: "./assets/mp3/NiuDuyen-LeBaoBinh-6872127.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2020/12/07/e/7/5/9/1607308157174.jpg",
    },
    {
      name: "Nắm Đôi Bàn Tay",
      singer: "Kay Trần",
      path: "./assets/mp3/NamDoiBanTay-KayTran-7042104.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/07/03/e/9/6/f/1625303286239.jpg",
    },
    {
      name: "Chúng Ta Sau Này",
      singer: "T.R.I",
      path: "./assets/mp3/ChungTaSauNay-TRI-6929586.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/01/27/5/2/2/b/1611738358661.jpg",
    },
    {
      name: "Trên Tình Bạn Dưới Tình Yêu",
      singer: "MIN",
      path: "./assets/mp3/TrenTinhBanDuoiTinhYeu-MIN-6802163.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2020/11/05/4/4/6/c/1604574284072.jpg",
    },
    {
      name: "Thế Thái",
      singer: "Hương Ly",
      path: "./assets/mp3/TheThai-HuongLy-6728509.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2020/10/12/0/7/e/3/1602477673421.jpg",
    },
    {
      name: "Lỡ Say Bye Là Bye",
      singer: "Lemese,Changg",
      path: "./assets/mp3/LoSayByeLaBye-LemeseChangg-6926941.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2021/01/21/5/c/9/9/1611199600529.jpg",
    },
    {
      name: "Thương Em Là Điều Anh Không Thể Ngờ",
      singer: "Noo Phước Thịnh",
      path: "./assets/mp3/ThuongEmLaDieuAnhKhongTheNgo-NooPhuocThinh-5827347.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2018/12/18/2/c/1/f/1545098338244.jpg",
    },
  ],
  currentSong() {
    return init.songs[init.currentIndex];
  },
};

const actions = {
  togglePlay(state) {
    state.isPlaying = !state.isPlaying;
    if (state.isPlaying) {
      console.log(elements.audio.play());
      elements.audio.play();
      elements.cdThumb.play();
    } else {
      console.log(elements.audio.pause());
      elements.audio.pause();
      elements.cdThumb.pause();
    }
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
