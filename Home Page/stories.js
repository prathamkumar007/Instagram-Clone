function displayStories() {
  let stories = [
    {
      userDp: "cr7dp.jpg",
      username: "cristiano",
    },
    {
      userDp: "leodp.jpg",
      username: "leomessi",
    },
    {
      userDp: "viratDp.jpg",
      username: "viratkohli",
    },
    {
      userDp: "rohitdp.jpg",
      username: "rohitsharma",
    },
    {
      userDp: "neymardp.jpg",
      username: "neymar",
    },
    {
      userDp: "rvcinstadp.jpg",
      username: "rvcjinsta",
    },
    {
      userDp: "realdp.jpg",
      username: "realmadrid",
    },
    {
      userDp: "djokodp.jpg",
      username: "djokernole",
    },
    {
      userDp: "pldp.jpg",
      username: "pleague",
    },
    {
      userDp: "mudp.png",
      username: "ManUnited",
    },
    {
      userDp: "alnasserdp.png",
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
