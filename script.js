const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const progressBar = document.getElementById("progress");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playIcon.classList.replace("fa-pause", "fa-play");
    }
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
});

progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});