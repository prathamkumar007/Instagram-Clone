function displaySuggest(){
  let suggestions = [
    {
      username: "_ppratham_kumar",
      userPic: "flower1.jpeg",
      follow: "user1",
    },
    {
      username: "_ppratham_kumar",
      userPic: "flower1.jpeg",
      follow: "user2",
    },
  ];

  let suggestElement = document.querySelector(".suggestions");

  let innersugg = "";
  suggestions.forEach((suggestion) => {
    innersugg+=`<div class="suggestion-1">
                    <img src="${suggestion.userPic}" alt="userpic">
                    <div>
                        <p class="accounts">${suggestion.username}</p>
                        <p class="followed accounts">Followed by ${suggestion.follow}</p>
                    </div>
                    <div>
                        <a href="#" onclick="Follow(this)">Follow</a>
                    </div>
                </div>`;
    suggestElement.innerHTML=innersugg;
  });
}
displaySuggest();
function Follow(element){
  element.classList.toggle('following');
  element.textContent=element.classList.contains('following')?'Following':'Follow';
}