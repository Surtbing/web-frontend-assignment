const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

let isPlaying = false;

playButton.addEventListener('click', function () {
  if (isPlaying) {
    audioPlayer.pause();
    playButton.classList.remove('playing');
  } else {
    audioPlayer.play();
    playButton.classList.add('playing');
  }
  isPlaying = !isPlaying;
});

audioPlayer.addEventListener('ended', function () {
  playButton.classList.remove('playing');
  isPlaying = false;
});
