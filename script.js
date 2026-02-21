const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const openBtn = document.getElementById("openPage2");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

openBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});


let songs = [
  {
    title: "I Do",
    artist: "AYA cover",
    src: "song.mp3",
    cover: "cover1.png"
  },
  {
    title: "I Need You",
    artist: "AYA cover",
    src: "song2.mp3",
    cover: "cover2.png"
  },
  {
    title: "Mahal Ka Sa Akin",
    artist: "AYA cover",
    src: "song3.mp3",
    cover: "cover3.png"
  }
];

let currentSong = 0;
let audio = new Audio();

function openMusic() {
  modalContent.innerHTML = `
    <div class="music-player">
      <img id="cover" class="cover">

      <h2 id="title"></h2>
      <p id="artist"></p>

      <div class="controls">
        <button onclick="prevSong()">⏮</button>
        <button onclick="playPause()" id="playBtn">▶</button>
        <button onclick="nextSong()">⏭</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  loadSong();
}

function opencamera() {
  modalContent.innerHTML = `

  <div class="gallery-box">
    <h2 class="gallery-title">Our Cute Memories 📸</h2>

    <div class="rope"></div>

    <div class="hanging-gallery">

    <div class="gallery">

      <div class="polaroid">
      <div class="clip"></div>
        <img src="edub.png">
        <p>Cutie moment 💕</p>
      </div>

      <div class="polaroid">
      <div class="clip"></div>
        <img src="src/pic2.jpg">
        <p>Favorite day 🌸</p>
      </div>

      <div class="polaroid">
      <div class="clip"></div>
        <img src="src/pic3.jpg">
        <p>My happiness 🥺💖</p>
      </div>

    </div>
  </div>
`;
modal.classList.remove("hidden");
}

function openLetter() {
  modalContent.innerHTML = `

  <div class="letter-wrapper">

    <div class="letter">
      <h2>💌 Happy Birthday</h2>

      <p>
        My loveeee 🎂💖<br><br>

        From the moment you came into my life,
        everything became brighter and happier 🌸

        Thank you for your love, your care,
        and for being my safe place 🥺💕

        I’m so lucky to have you.
        I will always be here for you — no matter what 💗

        I love you more than words can explain 💞
      </p>

      <h3>— Yours always 💖</h3>
    </div>

  </div>
`;

  modal.classList.remove("hidden");
}


function closeModal() {
  const audio = document.getElementById("birthdaySong");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  modal.classList.add("hidden");
}

function loadSong() {
  document.getElementById("title").textContent = songs[currentSong].title;
  document.getElementById("artist").textContent = songs[currentSong].artist;
  document.getElementById("cover").src = songs[currentSong].cover;

  audio.src = songs[currentSong].src;
}

function playPause() {
  const btn = document.getElementById("playBtn");

  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong();
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

function goBack() {
  page2.classList.add("hidden");
  page1.classList.remove("hidden");
}
