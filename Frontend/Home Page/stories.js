function displayStories() {
  let stories = [
    {
      userDp: "/Frontend/Images/cr7dp.jpg",
      username: "cristiano",
    },
    {
      userDp: "/Frontend/Images/leodp.jpg",
      username: "leomessi",
    },
    {
      userDp: "/Frontend/Images/viratDp.jpg",
      username: "viratkohli",
    },
    {
      userDp: "/Frontend/Images/rohitdp.jpg",
      username: "rohitsharma",
    },
    {
      userDp: "/Frontend/Images/neymardp.jpg",
      username: "neymar",
    },
    {
      userDp: "/Frontend/Images/rvcinstadp.jpg",
      username: "rvcjinsta",
    },
    {
      userDp: "/Frontend/Images/realdp.jpg",
      username: "realmadrid",
    },
    {
      userDp: "/Frontend/Images/djokodp.jpg",
      username: "djokernole",
    },
    {
      userDp: "/Frontend/Images/pldp.jpg",
      username: "pleague",
    },
    {
      userDp: "/Frontend/Images/mudp.png",
      username: "ManUnited",
    },
    {
      userDp: "/Frontend/Images/alnasserdp.png",
      username: "alnassr",
    },
  ];

  let storyElement = document.querySelector(".insta-story");
  let storyHtml = "";
  stories.forEach((story) => {  
    storyHtml += `
        <div class="all-story">
            <div class="back">
                <div class="story1">
                    <img src="${story.userDp}" alt="" class="story1">
                    </div>
            </div>
            <div class="user-story">
                <p>${story.username}</p>
            </div>
        </div>`;
  });
  storyElement.innerHTML = storyHtml;
}
document.addEventListener("DOMContentLoaded", function () {
  displayStories();
});
