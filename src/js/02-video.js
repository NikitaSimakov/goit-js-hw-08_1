import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.setCurrentTime(Number(localStorage.getItem(KEY_TIME)) || 0);

function onTimeUpdate({ seconds }) {
  localStorage.setItem(KEY_TIME, seconds);
}
