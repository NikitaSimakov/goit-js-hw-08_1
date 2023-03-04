import Player from '@vimeo/player';

// const savedTime = 0;
const handstickPlayer = new Player('vimeo-player');
handstickPlayer.on('timeupdate', onTimeUpdate);

function onTimeUpdate(event) {
  //   savedTime = event.seconds;
  console.log(event.seconds);
  savedTime = event.seconds;
  console.log(savedTime);
}

// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

import { square, diag } from './01-gallery';

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
