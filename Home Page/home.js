async function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    username: "indiancricketteam",
                    userDp: "indianct.jpg",
                    imageUrl: "wc24.webp",
                    likes: "5.5M",
                    comments: "77.5K",
                    shares: "4.8M",
                    caption: "C.H.A.M.P.I.O.N.S 🏆",
                },
                {
                    username: "cristiano",
                    userDp: "cr7dp.jpg",
                    imageUrl: "cristiano.jpg",
                    likes: "9.6M",
                    comments: "88.8K",
                    shares: "60.8K",
                    caption: "😎 🇵🇹",
                },
                {
                    username: "leomessi",
                    userDp: "leodp.jpg",
                    imageUrl: "leomessi.jpg",
                    likes: "9M",
                    comments: "80K",
                    shares: "70.8K",
                    caption: "Una más… 🏆🏆",
                },
                {
                    username: "virat.kohli",
                    userDp: "viratDp.jpg",
                    imageUrl: "viratkohli.jpg",
                    likes: "6.7M",
                    comments: "52.5K",
                    shares: "30K",
                    caption: "Big cat energy 🐈‍⬛ ​",
                },
                {
                    username: "kendalljenner",
                    userDp: "kendallDp.jpg",
                    imageUrl: "kendall.jpg",
                    likes: "2.1M",
                    comments: "6,469",
                    shares: "20K",
                    caption: "9pm sunsets 🐙​",
                },
            ]);
        }, 1000)
    });
}

async function displayPosts() {
    const posts = await fetchPosts();
    const postElement = document.querySelector(".posts");
    let innerHTML = "";

    posts.forEach((post) => {
        innerHTML += `
        <div class="post1">
            <div class="name">
                <img src="${post.userDp}" alt="userDP" class="indiact">
                <span class="username">${post.username}</span>
                <img src="tick.png" alt="Verified tick" class="tick">
            </div>
            <div class="img-container">
                <img src="${post.imageUrl}" alt="Post by ${post.username}" class="post-image">
            </div>
            <div class="feature light-like-icon">
                <div class="likecommentshare">
                    <button class="like">
                        <i class="far fa-heart"></i>
                        <p class="post-likes">${post.likes}</p>
                    </button>
                    <button class="comment">
                        <i class="far fa-comment"></i>
                        <p class="post-likes">${post.comments}</p>
                    </button>
                    <button class="share">
                        <i class="far fa-paper-plane"></i>
                        <p class="post-likes">${post.shares}</p>
                    </button>
                    <button class="save left">
                        <i class="far fa-bookmark"></i>
                    </button>
                </div>
            </div>
            <p class="champions"><strong>${post.username}</strong> ${post.caption}</p>
        </div>
        `;
    });

    postElement.innerHTML = innerHTML;
}

displayPosts();