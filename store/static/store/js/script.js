document.addEventListener('DOMContentLoaded', () => {
  const playButtons = document.querySelectorAll('.pause-play-toggle');
  const trackMonitor = [];
  const audioContext = new AudioContext();

  playButtons.forEach((playButton, index) => {
    playButton.dataset.id = index;
    trackMonitor.push({ index: index, trackConnected: false });

    playButton.addEventListener('click', (event) => {
      const songContainer = event.target.closest('.song-wrapper');
      const audioElement = songContainer.querySelector('audio');

      const playButtonId = playButton.dataset.id;
      trackMonitor.forEach(({ index, trackConnected }) => {
        if (index === playButtonId && !trackConnected) {
          const track = audioContext.createMediaElementSource(audioElement);
          track.connect(audioContext.destination);
          trackConnected = true;
        }
      })

      // Check if context is in suspended state (autoplay policy)
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      // Play or pause track depending on state
      if (playButton.dataset.playing === 'false') {
        audioElement.play();
        playButton.dataset.playing = 'true';
        songContainer.querySelector('.bi').classList.replace('bi-play-fill', 'bi-pause-fill');
      } else if (playButton.dataset.playing === 'true') {
        audioElement.pause();
        playButton.dataset.playing = 'false';
        songContainer.querySelector('.bi').classList.replace('bi-pause-fill', 'bi-play-fill');
      }
    });
  })
})