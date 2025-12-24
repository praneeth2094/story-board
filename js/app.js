document.querySelectorAll(".audio-card").forEach(card => {
  const audio = card.querySelector("audio");
  const playBtn = card.querySelector(".play-btn");
  const progress = card.querySelector(".progress");

  playBtn.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(a => {
      if (a !== audio) a.pause();
    });

    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  });

  progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });

  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
});
