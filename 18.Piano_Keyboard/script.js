function playSound(index) {
  const soundMap = {
    1: 'Assets/A.mp3',
    2: 'Assets/A.mp3',
    3: 'Assets/C.mp3',
    4: 'Assets/D.mp3',
    5: 'Assets/E.mp3',
    6: 'Assets/F.mp3',
    7: 'Assets/G.mp3',
    8: 'Assets/H.mp3',
    9: 'Assets/G.mp3',
    10: 'Assets/H.mp3',
    11: 'Assets/K.mp3',
    12: 'Assets/L.mp3',
    13: 'Assets/O.mp3',
    14: 'Assets/N.mp3',
    15: 'Assets/O.mp3',
  };

  const audio = new Audio(soundMap[index]);
  audio.play();
}