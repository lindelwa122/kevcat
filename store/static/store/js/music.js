document.addEventListener('DOMContentLoaded', () => {
  const lyrics = [
    'My flow so sick, it knocks you off your feet',
    'I\'m living large, stacking cash to the ceiling',
    'Got diamonds on my chain, and my wrist is blinging',
    'But don\'t get it twisted, I came from the bottom',
    'I worked hard to get here, and I ain\'t forgotten',
    'My roots and my struggles, they made me who I am',
    'And now I\'m on top, living the dream, damn.',
    'I\'m spitting fire, got flames in my mouth',
    'My rhymes so hot, they make the devil come out',
    'I\'m the king of the mic, the ruler of the beat'
  ];

  let lyricsIndex = 3;

  const lyricsContainer = document.querySelector('.music-hero-text');

  const animateLyrics = () => {
    const newLine = document.createElement('div');
    newLine.className = 'line';
    newLine.innerText = lyrics[lyricsIndex % lyrics.length];

    const [line1, line2, line3] = document.querySelectorAll('.line');

    line3.classList.add('current');
    line2.classList.remove('current');

    lyricsContainer.appendChild(newLine);
    line1.remove();

    lyricsIndex++;
  }

  setInterval(animateLyrics, 5000);
});