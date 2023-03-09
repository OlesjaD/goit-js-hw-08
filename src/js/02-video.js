import player from "@vimeo/player";
import throttle from "lodash.throttle";

const PLAYER_KEY = "videoplayer-current-time";
const idPlayer = new player('vimeo-player');

const onPlay = function(currentTime) {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
    const timeVideoPause = currentTime.seconds;
    // console.log('time:', timeVideoPause);
    localStorage.setItem(PLAYER_KEY, timeVideoPause);
};

idPlayer.on('pause', throttle(onPlay, 1000));

savedTime = localStorage.getItem(PLAYER_KEY);
idPlayer.setCurrentTime(savedTime).then(function(e) {
    if (savedTime) {
        idPlayer.on('play', onPlay);
    }
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});