import player from "@vimeo/player";
import throttle from "lodash.throttle";

const idPlayer = new player('vimeo-player');

const onPlay = function(currentTime) {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
    const timeVideoPause = currentTime.seconds;
    // console.log('time:', timeVideoPause);
    localStorage.setItem("videoplayer-current-time", timeVideoPause);
};

idPlayer.on('pause', throttle(onPlay, 1000));

savedTime = localStorage.getItem("videoplayer-current-time");
idPlayer.setCurrentTime(savedTime).then(function() {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});