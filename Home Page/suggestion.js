function displaySuggest(){
  let suggestions = [
    {
      username: "_itz_singh_28",
      userPic: "/Images/userDp.jpg",
      follow: "abhinav_jindal",
    },
    {
      username: "_itz_singh_28",
      userPic: "/Images/userDp.jpg",
      follow: "abhinav_jindal",
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