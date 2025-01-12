function displayPosts() {
  let posts = [
    {
      username: "indiancricketteam",
      userDp: "/Frontend/Images/indianct.jpg",
      imageUrl: "/Frontend/Images/wc24.webp",
      likes: "5.5M",
      comments: "77.5K",
      shares: "4.8M",
      caption: "C.H.A.M.P.I.O.N.S 🏆",
    },
    {
        username: "cristiano",
        userDp: "/Frontend/Images/cr7dp.jpg",
        imageUrl: "/Frontend/Images/cristiano.jpg",
        likes: "9.6M",
        comments: "88.8K",
        shares: "60.8K",
        caption: "😎 🇵🇹",
    },
    {
        username: "leomessi",
        userDp: "/Frontend/Images/leodp.jpg",
        imageUrl: "/Frontend/Images/leomessi.jpg",
        likes: "9M",
        comments: "80K",
        shares: "70.8K",
        caption: "Una más… 🏆🏆",
    },
    {
        username: "virat.kohli",
        userDp: "/Frontend/Images/viratDp.jpg",
        imageUrl: "/Frontend/Images/viratkohli.jpg",
        likes: "6.7M",
        comments: "52.5K",
        shares: "30K",
        caption: "Big cat energy 🐈‍⬛​",
    },
    {
        username: "kendalljenner",
        userDp: "/Frontend/Images/kendallDp.jpg",
        imageUrl: "/Frontend/Images/kendall.jpg",
        likes: "2.1M",
        comments: "6,469",
        shares: "20K",
        caption: "9pm sunsets 🐙​",
    },
  ];

  const postElement = document.querySelector(".posts");
  let innerHTML = "";
  posts.forEach((post) => {
    innerHTML += `
    <div class="post1">
        <div class="name">
            <img src="${post.userDp}" alt="userDP" class="indiact">
            <span class="username">${post.username}</span>
            <img src="/Frontend/Images/tick.png" alt="Verified tick" class="tick">
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
                    <i class="far fa-comment" ></i>
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
         <div class="feature dark-like-icon">
            <div class="likecommentshare">
                <button class="like">
                    <img src="/Frontend/Images/darkHeart.png" class="dark-img">
                    <p class="post-likes">${post.likes}</p>
                </button>
                <button class="comment">
                    <img src="/Frontend/Images/darkMessage.png" class="dark-img">
                    <p class="post-likes">${post.comments}</p>
                </button>
                <button class="share">
                    <img src="/Frontend/Images/darkShare.png" class="dark-img">
                    <p class="post-likes">${post.shares}</p>
                </button>
                <button class="save left">
                    <img src="/Frontend/Images/darkSave.png">
                </button>
            </div>
        </div>
        <p class="champions"><strong>${post.username}</strong> ${post.caption}</p>
    </div>
    `;
});
postElement.innerHTML = innerHTML;
document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('dblclick', () => {
        const likeIcon = button.querySelector('i');
        if (likeIcon.classList.contains('far')) {
            const redLikeImage = document.createElement('img');
            redLikeImage.src = '/Images/redlike.png';
            redLikeImage.style.width = '24px';
            redLikeImage.style.height = '24px';
            button.replaceChild(redLikeImage, likeIcon);
        } else {
            const originalIcon = document.createElement('i');
            originalIcon.className = 'far fa-heart';
            button.replaceChild(originalIcon, button.querySelector('img'));
        }
    });
button.addEventListener('click', () => {
    const currentLikeImage = button.querySelector('img');
    if (currentLikeImage) {

        const originalIcon = document.createElement('i');
        originalIcon.className = 'far fa-heart';
        button.replaceChild(originalIcon, currentLikeImage);
    } else {
        const redLikeImage = document.createElement('img');
        redLikeImage.src = '/Images/redlike.png';
        redLikeImage.style.width = '24px';
        redLikeImage.style.height = '24px';
        button.replaceChild(redLikeImage, button.querySelector('i'));
    }
    });
});
}
displayPosts();

function toggleLogin(){
    const modal=document.getElementById('loginModal');
    const background=document.getElementById('modalBackground');
    const body=document.body;

    if(modal.style.display==='block'){
        modal.style.display='none';
        background.style.display='none';
        body.classList.remove('dimmed');
    }
    else{
        modal.style.display='block';
        background.style.display='block';
        body.classList.add('dimmed');
    }
}

function xicon(){
    const body=document.body;
    const background=document.getElementById('modalBackground');
    document.getElementById('loginModal').style.display='none';
    background.style.display='none';
    body.classList.remove('dimmed');
}

let currSet="none";
function Settings(){
    const settings=document.querySelector('.more-settings');
    if(currSet==="none"){
        currSet="block";
        settings.style.display="block";
    }
    else{
        currSet="none";
        settings.style.display="none";
    }
}

function reels(){
    document.querySelector('.stories').style.display="none";
    document.querySelector('.contacts').style.display="none";
    document.querySelector('.reels-container').style.display="block";
}
function home(){
    document.querySelector('.stories').style.display="block";
    document.querySelector('.contacts').style.display="block";
    document.querySelector('.reels-container').style.display="none";
    document.querySelector('.stories').style = "margin-left: 15%";
}

function logout(){
    window.location.href="../Login Page/login.html";
}