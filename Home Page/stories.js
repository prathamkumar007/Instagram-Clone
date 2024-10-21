function displayStories(){
    let stories=[
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
        {
            userDp:"flower1.jpeg",
            username:"user1",
        },
    ];

    let storyElement=document.querySelector('.insta-story');
    let storyHtml="";
    stories.forEach((story)=>{
        storyHtml+=`
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
    storyElement.innerHTML=storyHtml;
}
displayStories();