import player from "@vimeo/player";
import throttle from "lodash.throttle";

const PLAYER_KEY = "videoplayer-current-time";
const idPlayer = new player('vimeo-player');

const onPlay = function(currentTime) {
    const timeVideoPause = currentTime.seconds;
    // console.log('time:', timeVideoPause);
    localStorage.setItem(PLAYER_KEY, timeVideoPause);
};

idPlayer.on('pause', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(PLAYER_KEY);
idPlayer.setCurrentTime(savedTime).then(function() {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});