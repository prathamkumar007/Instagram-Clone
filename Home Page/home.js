function displayPosts() {
  let posts = [
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
  ];

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
            <img src="${post.imageUrl}" alt="Post by ${post.username}">
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
                    <img src="darkHeart.png" class="dark-img">
                    <p class="post-likes">${post.likes}</p>
                </button>
                <button class="comment">
                    <img src="darkMessage.png" class="dark-img">
                    <p class="post-likes">${post.comments}</p>
                </button>
                <button class="share">
                    <img src="darkShare.png" class="dark-img">
                    <p class="post-likes">${post.shares}</p>
                </button>
                <button class="save left">
                    <img src="darkSave.png">
                </button>
            </div>
        </div>
        <p class="champions"><strong>${post.username}</strong> ${post.caption}</p>
    </div>
    `;
    postElement.innerHTML = innerHTML;
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
}