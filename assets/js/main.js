const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const curTime = $(".current-time");
const durTime = $(".duration-time");
const menuTracks = $(".list-songs");
const wrapSong = $(".wrap-songs");
const hideTracks = $(".playlist > ion-icon");

function App() {
  songs = [
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
  ];
  return {
    currentIndex: 0,
    isTimeUpDate: false,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    listRandomSongs: [],
    loadCurrentSong() {
      heading.innerHTML = songs[this.currentIndex].name;
      cdThumb.style.backgroundImage =
        "url(" + songs[this.currentIndex].image + ")";
      audio.src = songs[this.currentIndex].path;
    },

    render() {
      let html = songs.map(
        (song, index) => `
                <div class="song ${
                  index === this.currentIndex && "active"
                }" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <ion-icon name="ellipsis-horizontal-circle"></ion-icon>
                    </div>
                </div>
            `
      );
      wrapSong.innerHTML = html.join("");
    },

    handleEvent() {
      // Xoay cdThum
      let cdThumbAnimation = cdThumb.animate(
        [{ transform: "rotate(360deg)" }],
        { duration: 10000, iterations: Infinity }
      );
      cdThumbAnimation.pause();

      // Khi click vao play
      playBtn.onclick = () => {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
      };
      // Khi audio duoc play
      audio.onplay = () => {
        cdThumbAnimation.play();
        this.isTimeUpDate = true;
        player.classList.add("playing");
      };
      // Khi audio bi pause
      audio.onpause = () => {
        cdThumbAnimation.pause();
        this.isTimeUpDate = false;
        player.classList.remove("playing");
      };
      // Khi audio ended
      audio.onended = () => {
        if (this.isRepeat) {
          audio.play();
        } else {
          nextBtn.click();
        }
      };
      // Xu ly thanh progress
      audio.ontimeupdate = () => {
        let currentTime = audio.currentTime;
        let duration = audio.duration;
        let progressPercent = Math.floor((currentTime / duration) * 100);
        if (this.isTimeUpDate) {
          if (isNaN(progressPercent)) progressPercent = 0;
          progress.value = progressPercent;
        }
        curTime.innerHTML = this.secondToMinute(currentTime);
        durTime.innerHTML = isNaN(duration)
          ? "00 : 00 "
          : this.secondToMinute(duration);
      };
      // Khi tua audio / seek on progress
      progress.onchange = () => {
        if (this.isTimeUpDate) {
          audio.currentTime = (progress.value * audio.duration) / 100;
        }
      };
      progress.onmousedown = () => {
        this.isTimeUpDate = false;
      };
      progress.onmouseup = () => {
        this.isTimeUpDate = true;
      };
      progress.ontouchstart = () => {
        this.isTimeUpDate = false;
      };
      progress.ontouchmove = () => {
        this.isTimeUpDate = false;
      };
      progress.ontouchend = () => {
        this.isTimeUpDate = true;
      };
      // Khi click nut Next
      nextBtn.onclick = () => {
        if (this.isRandom) {
          this.randomSong();
          if (this.listRandomSongs.length >= songs.length) {
            this.listRandomSongs = [this.currentIndex];
          }
        } else {
          this.nextSongs();
        }
        audio.play();
        this.render();
        this.scrollIntoView();
      };
      // Khi click vao Previous
      prevBtn.onclick = () => {
        if (this.isRandom) {
          if (this.listRandomSongs.length <= 0) {
            this.prevSongs();
          } else {
            this.currentIndex = this.listRandomSongs.pop();
            this.loadCurrentSong();
          }
        } else {
          this.prevSongs();
        }
        this.render();
        this.scrollIntoView();
        audio.play();
      };
      // Khi click vao nut random
      randomBtn.onclick = () => {
        this.isRandom = !this.isRandom;
        randomBtn.classList.toggle("active", this.isRandom);
      };
      // Khi click vao nut repeat
      repeatBtn.onclick = () => {
        this.isRepeat = !this.isRepeat;
        repeatBtn.classList.toggle("active", this.isRepeat);
      };
      // Khi click vao nut Tracks
      menuTracks.onclick = () => {
        playlist.style.top = 0;
        hideTracks.style.opacity = 1;
      };
      // Khi click vao hide tracks
      hideTracks.onclick = () => {
        playlist.style.top = "100%";
        hideTracks.style.opacity = 0;
      };
      // Khi click vao song
      playlist.onclick = (e) => {
        const songNode = e.target.closest(".song:not(.active)");
        if (songNode || e.target.closest(".option")) {
          if (songNode) {
            console.log(songNode);
            this.currentIndex = Number(songNode.dataset.index);
            setTimeout(function () {
              playlist.style.top = "100%";
              hideTracks.style.opacity = 0;
            }, 300);
          }
          if (e.target.closest(".option")) {
            console.log(123);
          }
          this.loadCurrentSong();
          this.render();
          audio.play();
        }
      };
    },

    secondToMinute(s) {
      let minute = Math.floor(s / 60);
      let second = Math.floor(s % 60);
      let result;
      if (second >= 0 && second <= 9) {
        result = `0${minute} : 0${second}`;
      } else {
        result = `0${minute} : ${second}`;
      }
      return result;
    },

    nextSongs() {
      this.currentIndex++;
      if (this.currentIndex >= songs.length) this.currentIndex = 0;
      this.loadCurrentSong();
    },

    prevSongs() {
      this.currentIndex--;
      if (this.currentIndex <= 0) this.currentIndex = songs.length - 1;
      this.loadCurrentSong();
    },

    randomSong() {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * songs.length);
      } while (
        newIndex === this.currentIndex ||
        this.listRandomSongs.includes(newIndex)
      );
      this.listRandomSongs.push(newIndex);
      this.currentIndex = newIndex;
      this.loadCurrentSong();
    },

    scrollIntoView() {
      setTimeout(function () {
        $(".song.active").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 500);
    },

    start() {
      this.render();
      this.loadCurrentSong();

      this.handleEvent();
    },
  };
}
App().start();
