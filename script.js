const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const openBtn = document.getElementById("openPage2");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

openBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

function openMusic() {
  modalContent.innerHTML = `
    <h3>🎵 Your Song</h3>
    <audio controls>
      <source src="song.mp3" type="audio/mpeg">
    </audio>
  `;
  modal.classList.remove("hidden");
}

function opencamera() {
  modalContent.innerHTML = `
    <h3>Photos for you!</h3>
    <div class="photo-gallery">
      <img src="edub.png" alt="Picture 1">
      <img src="C:\\pc\\OneDrive\\Documents\\birthday\\src\\pic2.png" alt="Picture 2">
      <img src="C:\\pc\\OneDrive\\Documents\\birthday\\src\\pic3.png" alt="Picture 3">
    </div>
  `;
  modal.classList.remove('hidden');
}

function openLetter() {
  modalContent.innerHTML = `
    <h3>💌 A Letter</h3>
    <p style="line-height:1.6; margin-top:15px;">
      Happy Birthday 💖<br><br>
      You deserve all the happiness in the world!  
      May this year bring you joy, success,  
      and everything your heart wishes for ✨
    </p>
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

