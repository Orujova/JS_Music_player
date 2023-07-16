const albumCover = document.querySelector(".album-cover img");
const songTitle = document.querySelector(".song-title");
const artistName = document.querySelector(".artist-name");
const playButton = document.querySelector(".play-button");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const progressBar = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-bar");
const volumeSlider = document.querySelector(".volume-slider");

let songs = [
  {
    title: "Tom's Diner",
    artist: "AnnenMayKantereit, Giant Rooks",
    cover: "https://i.pinimg.com/736x/8f/7a/69/8f7a69bf4b82014f58fe7a57bdadaa1f.jpg",
    audio: "song1.mp3",
  },
  {
    title: "Revenge",
    artist: "XXXTentacion",
    cover: "https://hiphopkit.com/uploads/2022/04/XXXTentacion-Revenge-artwork.webp",
    audio: "song2.mp3",
  },
  {
    title: "Garezi var",
    artist: "Kahraman Deniz",
    cover: "https://i1.sndcdn.com/artworks-000194336630-5xezxv-t500x500.jpg",
    audio: "song3.mp3",
  },
  {
    title: "Firuze",
    artist: "Sezen Aksu",
    cover: "https://www.mp3indirdur.mobi/album/Sezen-Aksu-Firuze.jpg",
    audio: "song4.mp3",
  },
 
];

let currentSongIndex = 0;
let audio = new Audio();

const loadSong = (songIndex) => {
  const song = songs[songIndex];
  audio.src = song.audio;
  audio.addEventListener("loadedmetadata", () => {
    updateProgress(0);
  });
  albumCover.src = song.cover;
  albumCover.style="width: 200px; height:200px"
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
};

const playSong = () => {
  audio.play();
  playButton.querySelector("img").src = "https://cdn-icons-png.flaticon.com/512/61/61180.png";
  playButton.style="width: 30px; height:30px"
};

const pauseSong = () => {
  audio.pause();
  playButton.querySelector("img").src = "https://cdn-icons-png.flaticon.com/512/4028/4028535.png";
  playButton.style="width: 30px; height:30px"
};

const togglePlayback = () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
};

const playNextSong = () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
};

const playPrevSong = () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
};

const updateProgress = (currentTime) => {
  const duration = audio.duration;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
};

const setProgress = (event) => {
  const width = progressContainer.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
};

const updateVolume = () => {
  audio.volume = volumeSlider.value;
};

loadSong(currentSongIndex);

playButton.addEventListener("click", togglePlayback);
prevButton.addEventListener("click", playPrevSong);
nextButton.addEventListener("click", playNextSong);
audio.addEventListener("timeupdate", () => {
  updateProgress(audio.currentTime);
});
progressContainer.addEventListener("click", setProgress);
volumeSlider.addEventListener("input", updateVolume);


{/* <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://i.pinimg.com/736x/8f/7a/69/8f7a69bf4b82014f58fe7a57bdadaa1f.jpg"
                alt=""
              />
              <div>
                <h1>Tom's dinner</h1>

                <button onclick="changeSong(0)">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/48/null/circular-arrows--v1.png"
                  />
                  Sound
                </button>
              </div>
            </div>

            <div class="swiper-slide">
              <img
                src="https://hiphopkit.com/uploads/2022/04/XXXTentacion-Revenge-artwork.webp"
                alt=""
              />
              <div>
                <h1>Revenge</h1>

                <button onclick="changeSong(1)">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/48/null/circular-arrows--v1.png"
                  />
                  Sound
                </button>
              </div>
            </div>
            <div class="swiper-slide">
              <img
                src="https://i1.sndcdn.com/artworks-000194336630-5xezxv-t500x500.jpg"
                alt=""
              />
              <div>
                <h1>Garezi var</h1>
                <button onclick="changeSong(2)">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/48/null/circular-arrows--v1.png"
                  />
                  Sound
                </button>
              </div>
            </div>
            <div class="swiper-slide">
              <img
                src="https://www.mp3indirdur.mobi/album/Sezen-Aksu-Firuze.jpg"
                alt=""
              />
              <div>
                <h1>Firuze</h1>
                <button onclick="changeSong(3)">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/48/null/circular-arrows--v1.png"
                  />
                  Sound
                </button>
              </div>
            </div> */}