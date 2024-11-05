function displayStories() {
  let stories = [
    {
      userDp: "/Images/cr7dp.jpg",
      username: "cristiano",
    },
    {
      userDp: "/Images/leodp.jpg",
      username: "leomessi",
    },
    {
      userDp: "/Images/viratDp.jpg",
      username: "viratkohli",
    },
    {
      userDp: "/Images/rohitdp.jpg",
      username: "rohitsharma",
    },
    {
      userDp: "/Images/neymardp.jpg",
      username: "neymar",
    },
    {
      userDp: "/Images/rvcinstadp.jpg",
      username: "rvcjinsta",
    },
    {
      userDp: "/Images/realdp.jpg",
      username: "realmadrid",
    },
    {
      userDp: "/Images/djokodp.jpg",
      username: "djokernole",
    },
    {
      userDp: "/Images/pldp.jpg",
      username: "pleague",
    },
    {
      userDp: "/Images/mudp.png",
      username: "ManUnited",
    },
    {
      userDp: "/Images/alnasserdp.png",
      username: "alnassr",
    },
  ];

  let storyElement = document.querySelector(".insta-story");
  let storyHtml = "";
  stories.forEach((story) => {  
    storyHtml += `
        <div className="all-story">
            <div className="back">
                <div className="story1">
                    <img src="${story.userDp}" alt="" className="story1">
                    </div>
            </div>
            <div className="user-story">
                <p>${story.username}</p>
            </div>
        </div>`;
  });
  storyElement.innerHTML = storyHtml;
}
document.addEventListener("DOMContentLoaded", function () {
  displayStories();
});
