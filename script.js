const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
let isPlaying = true;
let indexSong = 0;
const nextBtn = document.querySelector(".playforward");
const prevBtn = document.querySelector(".playback");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
//const musics = ["Pano.mp3", "273C.mp3", "anhDaQuenVoiCoDon.mp3", "anhDechcanGiNhieuNgoaiEm.mp3", "anotherLove.mp3", "buonThiCuKhocDi.mp3", "doEmBietAnhDangNghiGi.mp3", "gioNoiRoi.mp3", "headInTheClouds.mp3", "iAintWorried.mp3", "ifIAntGotYou.mp3", "ngheNhuTinhYeu.mp3", "nightDancer.mp3", "phiDieuVaVeSau.mp3", "pyscho.mp3", "querry.mp3", "somebodyThatIUseToKnow.mp3", "thisIsAmerica.mp3", "tuEmMaRa.mp3", "whistle.mp3", "whyNotMe.mp3", "worldSmallestViolin.mp3"];
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-names");
const loveBtn = document.querySelector("lovebtn");
const musicList = document.querySelector(".playlist-musics");
const ulTag = document.querySelector("li");

let musics = [
  {
    id: 1,
    name: "Pano",
    src: "Pano.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 2,
    name: "273C",
    src: "273C.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 3,
    name: "Anh Đã Quen Với Cô Đơn",
    src: "anhDaQuenVoiCoDon.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 4,
    name: "Anh Đếch Cần Gì Nhiều Ngoài Em",
    src: "anhDechcanGiNhieuNgoaiEm.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 5,
    name: "Another Love",
    src: "anotherLove.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 6,
    name: "Buồn Thì Cứ Khóc Đi",
    src: "buonThiCuKhocDi.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 7,
    name: "Đố Em Biết Anh Đang Nghĩ Gì",
    src: "doEmBietAnhDangNghiGi.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 8,
    name: "Gió Nổi Rồi",
    src: "gioNoiRoi.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 9,
    name: "Head In The Clouds",
    src: "headInTheClouds.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 10,
    name: "I Aint Worried",
    src: "iAintWorried.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 11,
    name: "If I Aint Got You",
    src: "ifIAntGotYou.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 12,
    name: "Nghe Như Tình Yêu",
    src: "ngheNhuTinhYeu.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 13,
    name: "Night Dancer",
    src: "nightDancer.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 14,
    name: "Phi Điểu Và Ve Sầu",
    src: "phiDieuVaVeSau.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 15,
    name: "Psycho",
    src: "psycho.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 16,
    name: "Querry",
    src: "querry.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 17,
    name: "Somebody That I Used To Know",
    src: "somebodyThatIUseToKnow.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 18,
    name: "This Is America",
    src: "thisIsAmerica.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 19,
    name: "Từ Em Mà Ra",
    src: "tuEmMaRa.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 20,
    name: "Whistle",
    src: "whistle.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 21,
    name: "Why Not Me",
    src: "whyNotMe.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  },
  {
    id: 22,
    name: "World Smallest Violin",
    src: "worldSmallestViolin.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67706c0000bebb0b9eb11e872162a1f4ea9714.jfif?v=1668656428148"
  }
];

//controls
song.setAttribute("src", musics[indexSong].src);
nextBtn.addEventListener("click", function(){
  changeSong(1);
});
prevBtn.addEventListener("click", function() {
  changeSong(-1);
});
function changeSong(dir) {
  if(dir == 1) {
    indexSong++;
    if(indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if(dir == -1){
      indexSong--;
      if (indexSong < 0){
        indexSong = musics.length -1;
      }
      isPlaying = true;
  }
 // song.setAttribute("src", musics[indexSong].src);
  init(indexSong);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if(isPlaying) {
    song.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = true;
  }
}
//auto next
function playSong(index) {
  song.src = musics[index].src;
  song.play();
  
}
song.addEventListener("ended", function playNextS() {
  indexSong++;
  if (indexSong == musics.length) {
    indexSong = 0;
    playSong(indexSong);
    init(indexSong);
  } else {
    playSong(indexSong);
    init(indexSong);
  }
})
//thoi gian chay
function displayTimer() {
  const {duration, currentTime} = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
}
displayTimer();
setInterval(displayTimer, 1000);
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
//doi tieu de 
function init(indexSong) {
  song.setAttribute("src", musics[indexSong].src);
  musicName.textContent = musics[indexSong].name;
  playSong(indexSong);
}
init(indexSong);
//chon playlist
const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");
const m4 = document.querySelector("#m4");
const m5 = document.querySelector("#m5");
const m6 = document.querySelector("#m6");
const m7 = document.querySelector("#m7");
const m8 = document.querySelector("#m8");
const m9 = document.querySelector("#m9");
const m10 = document.querySelector("#m10");
const m11 = document.querySelector("#m11");
const m12 = document.querySelector("#m12");
const m13 = document.querySelector("#m13");
const m14 = document.querySelector("#m14");
const m15 = document.querySelector("#m15");
const m16 = document.querySelector("#m16");
const m17 = document.querySelector("#m17");
const m18 = document.querySelector("#m18");
const m19 = document.querySelector("#m19");
const m20 = document.querySelector("#m20");
const m21 = document.querySelector("#m21");
const m22 = document.querySelector("#m22");

m1.addEventListener("click", playM0);
function playM0() {
  indexSong =0;
  song.setAttribute("src", musics[0].src);
  playPause(0);
 musicName.innerHTML = 'Pano';
}
m2.addEventListener("click", playM1);
function playM1() {
 indexSong = 1;
  song.setAttribute("src", musics[1].src);
  playPause(1);
  musicName.innerHTML = '273C';
}
m3.addEventListener("click", playM2);
function playM2() {
  indexSong =2;
  song.setAttribute("src", musics[2].src);
  playPause(2);
  musicName.innerHTML = 'Anh Đã Quen Với Cô Đơn';
}
m4.addEventListener("click", playM3);
function playM3() {
 indexSong = 3;
  song.setAttribute("src", musics[3].src);
  playPause(3);
  musicName.innerHTML = 'Anh Đếch Cần Gì Nhiều Ngoài Em';
}
m5.addEventListener("click", playM4);
function playM4() {
 indexSong = 4;
  song.setAttribute("src", musics[4].src);
  playPause(4);
  musicName.innerHTML = 'Another Love';
}
m6.addEventListener("click", playM5);
function playM5() {
 indexSong = 5;
  song.setAttribute("src", musics[5].src);
  playPause(5);
  musicName.innerHTML = 'Buồn Thì Cứ Khóc Đi';
}
m7.addEventListener("click", playM6);
function playM6() {
 indexSong = 6;
  song.setAttribute("src", musics[6].src);
  playPause(6);
  musicName.innerHTML = 'Đố Em Biết Anh Đang Nghĩ Gì';
}
m8.addEventListener("click", playM7);
function playM7() {
 indexSong = 7;
  song.setAttribute("src", musics[7].src);
  playPause(7);
  musicName.innerHTML = 'Gió Nổi Rồi';
}
m9.addEventListener("click", playM8);
function playM8() {
 indexSong = 8;
  song.setAttribute("src", musics[8].src);
  playPause(8);
  musicName.innerHTML = 'Head In The Clouds';
}
m10.addEventListener("click", playM9);
function playM9() {
 indexSong = 9;
  song.setAttribute("src", musics[9].src);
  playPause(9);
  musicName.innerHTML = 'I Aint Worried';
}
m11.addEventListener("click", playM10);
function playM10() {
 indexSong = 10;
  song.setAttribute("src", musics[10].src);
  playPause(10);
  musicName.innerHTML = 'If I Aint Got You';
}
m12.addEventListener("click", playM11);
function playM11() {
 indexSong = 11;
  song.setAttribute("src", musics[11].src);
  playPause(11);
  musicName.innerHTML = 'Nghe Như Tình Yêu';
}
m13.addEventListener("click", playM12);
function playM12() {
 indexSong = 12;
  song.setAttribute("src", musics[12].src);
  playPause(12);
  musicName.innerHTML = 'Night Dancer';
}
m14.addEventListener("click", playM13);
function playM13() {
 indexSong = 13;
  song.setAttribute("src", musics[13].src);
  playPause(13);
  musicName.innerHTML = 'Phi Điểu Và Ve Sầu';
}
m15.addEventListener("click", playM14);
function playM14() {
 indexSong = 14;
  song.setAttribute("src", musics[14].src);
  playPause(14);
  musicName.innerHTML = 'Pyscho';
}
m16.addEventListener("click", playM15);
function playM15() {
 indexSong = 15;
  song.setAttribute("src", musics[15].src);
  playPause(15);
  musicName.innerHTML = 'Querry';
}
m17.addEventListener("click", playM16);
function playM16() {
 indexSong = 16;
  song.setAttribute("src", musics[16].src);
  playPause(16);
  musicName.innerHTML = 'Somebody That I Used To Know';
}
m18.addEventListener("click", playM17);
function playM17() {
 indexSong = 17;
  song.setAttribute("src", musics[17].src);
  playPause(17);
  musicName.innerHTML = 'This Is America';
}
m19.addEventListener("click", playM18);
function playM18() {
 indexSong = 18;
  song.setAttribute("src", musics[18].src);
  playPause(18);
  musicName.innerHTML = 'Từ Em Mà Ra';
}
m20.addEventListener("click", playM19);
function playM19() {
 indexSong = 19;
  song.setAttribute("src", musics[19].src);
  playPause(19);
  musicName.innerHTML = 'Whistle';
}
m21.addEventListener("click", playM20);
function playM20() {
 indexSong = 20;
  song.setAttribute("src", musics[20].src);
  playPause(20);
  musicName.innerHTML = 'Why Not Me';
}
m22.addEventListener("click", playM21);
function playM21() {
 indexSong = 21;
  song.setAttribute("src", musics[21].src);
  playPause(21);
  musicName.innerHTML = 'World Smallest Violin';
}
