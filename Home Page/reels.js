const reelsContainer = document.querySelector(".reels-container");

function displayReels() {
  const reels = [
    {
      userDp: "/Images/cr7dp.jpg",
      username: "cristiano",
      like: "4.9M",
      comment: "89.8k",
      video: "/Videos/Video-66.mp4",
    },
    {
      userDp: "/Images/indianct.jpg",
      username: "indiancricketeam",
      like: "5M",
      comment: "36k",
      video: "/Videos/Video-216.mp4",
    },
    {
      userDp: "/Images/anime.jpg",
      username: "_the_animefan",
      like: "100k",
      comment: "278",
      video: "/Videos/Video-99.mp4",
    },
    {
        userDp: "/Images/sekiro.jpg",
        username: "sekiro_editzz",
        like: "50k",
        comment: "649",
        video: "/Videos/Video-169.mp4",
    },
    {
        userDp: "/Images/nature.jpg",
        username: "swiss.beautifuls",
        like: "176k",
        comment: "1,057",
        video: "/Videos/Video-11.mp4",
    },
  ];

  let reelhtml = "";

  reels.forEach((reel) => {
    reelhtml += `
            <div class="reels_videos">
                <div class="video">
                    <video src="${reel.video}" playsinline></video>
                    <div class="top">
                        <i class="fas fa-camera"></i>
                    </div>
                    <div class="icons">
                        <div class="like-container">
                            <i class="far fa-heart"></i>
                            <small>${reel.like}</small>
                        </div>
                        <div>
                            <i class="far fa-comment "></i>
                            <small>${reel.comment}</small>
                        </div>
                        <i class="far fa-paper-plane"></i>
                        <img src="/Images/darkMenu.png" alt="" width="20px" height="20px">
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

reelsContainer.addEventListener("click", (event) => {
  const videoElement = event.target.closest(".video")?.querySelector("video");
  if (
    !videoElement ||
    event.target.closest(".icons") ||
    event.target.closest("button")
  ) {
    return;
  }

  if (currentlyPlayingVideo && currentlyPlayingVideo !== videoElement) {
    currentlyPlayingVideo.pause();
  }
  if (videoElement.paused) {
    videoElement.play();
    currentlyPlayingVideo = videoElement;
  } else {
    videoElement.pause();
    currentlyPlayingVideo = null;
  }
});
reelsContainer.addEventListener("click", (event) => {
  const likeIcon = event.target.closest(".like-container");
  if (likeIcon) {
    const heart = likeIcon.querySelector("i");
    heart.classList.toggle("fas");
    heart.classList.toggle("far");

    if (heart.classList.contains("fas")) {
      heart.style.fontSize = "20px";
      heart.style.color = "red";
    } else {
      heart.style.fontSize = "20px";
      heart.style.color = "";
    }
  }
});