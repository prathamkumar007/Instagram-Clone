const videos = document.querySelectorAll('.reels-container .reels_videos video');
const playPauseIcons = document.querySelectorAll('.reels-container .reels_videos .icons .far');

videos.forEach((video, index) => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseIcons[index].classList.remove('fa-play');
            playPauseIcons[index].classList.add('fa-pause');
        } else {
            video.pause();
            playPauseIcons[index].classList.remove('fa-pause');
            playPauseIcons[index].classList.add('fa-play');
        }
    });
});
