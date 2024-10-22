const reelsContainer = document.querySelector('.reels-container');

function displayReels() {
    const reels = [
        {   userDp:"cr7dp.jpg",
            username: "cristiano",
            like: "4.9M",
            comment: "89.8k",
            video: "Video-66.mp4",
        },
        {
            userDp:"indianct.jpg",
            username: "indiancricketeam",
            like: "5M",
            comment: "36k",
            video: "Video-216.mp4",
        }
    ];

    let reelhtml = "";

    reels.forEach(reel => {
        reelhtml += `
            <div class="reels_videos">
                <div class="video">
                    <video src="${reel.video}" playsinline></video>
                    <div class="top">
                        <i class="fas fa-camera"></i>
                    </div>
                    <div class="icons">
                        <div>
                            <i class="far fa-heart"></i>
                            <small>${reel.like}</small>
                        </div>
                        <div>
                            <i class="far fa-comment"></i>
                            <small>${reel.comment}</small>
                        </div>
                        <i class="far fa-paper-plane"></i>
                        <img src="darkMenu.png" alt="" width="20px" height="20px">
                        <img src="${reel.userDp}" alt="" width="20px" height="20px" class="profile-pic">
                    </div>
                    <div class="user_profile">
                        <div>
                            <img src="${reel.userDp}" alt="" class="profile-pic">
                            <h4>${reel.username}</h4>
                            <button>Follow</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    reelsContainer.innerHTML = reelhtml;
}
displayReels();

let currentlyPlayingVideo = null;

reelsContainer.addEventListener('click', (event) => {
    const videoElement = event.target.closest('.video')?.querySelector('video');

    // Ignore clicks on the icons or buttons
    if (!videoElement || event.target.closest('.icons') || event.target.closest('button')) {
        return;
    }

    // Pause currently playing video if it's different from the one clicked
    if (currentlyPlayingVideo && currentlyPlayingVideo !== videoElement) {
        currentlyPlayingVideo.pause();
    }

    // Toggle play/pause on the clicked video
    if (videoElement.paused) {
        videoElement.play();
        currentlyPlayingVideo = videoElement;
    } else {
        videoElement.pause();
        currentlyPlayingVideo = null;
    }
});
