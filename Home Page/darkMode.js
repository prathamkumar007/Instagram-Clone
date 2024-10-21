function displayDarkMode() {
  let mode = document.getElementById("darkMode");
  let currMode = localStorage.getItem("mode")||"light";
  let body = document.body;

  function updateIcons() {
    document.querySelectorAll('.light-icon').forEach(icon => {
      icon.style.display = currMode === "light" ? "block" : "none";
    });
    document.querySelectorAll('.dark-icon').forEach(icon => {
      icon.style.display = currMode === "dark" ? "block" : "none";
    });
    document.querySelectorAll('.post-likes').forEach(post => {
      post.style.color = currMode === "dark" ? "white" : "black";
    });
    document.querySelectorAll('.light-like-icon').forEach(licon => {
      licon.style.display = currMode === "dark" ? "none" : "block";
    });
    document.querySelectorAll('.dark-like-icon').forEach(licon => {
      licon.style.display = currMode === "dark" ? "block" : "none";
    });
    document.querySelectorAll('.dark-img').forEach(limg => {
      limg.style.display = currMode === "dark" ? "block" : "none";
    });
    document.querySelectorAll('.light-set').forEach(lset=>{
      lset.style.display=currMode==="dark"? "none":"block";
    })
    document.querySelectorAll('.dark-set').forEach(lset=>{
      lset.style.display=currMode==="dark"? "block":"none";
    });
  }
  const hr1=document.getElementById('hr2');
  const hr2=document.getElementById('hrset');
  function applyMode(){
    if (currMode === "dark") {
      body.classList.add("dark");
      body.classList.remove("light");
      document.querySelector('.login-modal').classList.add("showDark");
      document.getElementById('username').classList.add("inputs-dark");
      document.getElementById('password').classList.add("inputs-dark");
      document.getElementById('username').style = "border: none; background-color: #1a1a1a; color:white";
      document.getElementById('password').style = "border: none; background-color: #1a1a1a; color:white";
      document.querySelector('.more-settings').style.backgroundColor="#262626";
      document.querySelector('.loginbutton').style.border="none";
      document.querySelector('.loginbutton').style.backgroundColor="#0095F6";
      document.querySelector('.forgp').style.color="white";
      hr1.style.border="3px solid #5555554D";
      hr2.style.border="1px solid #55555580";
    } 
    else {
      body.classList.add("light");
      body.classList.remove("dark");
      document.querySelector('.login-modal').classList.remove("showDark");
      document.getElementById('username').classList.remove("inputs-dark");
      document.getElementById('password').classList.remove("inputs-dark");
      document.getElementById('username').style = "border: 1px solid grey; background-color: #f5f5f5";
      document.getElementById('password').style = "border: 1px solid grey; background-color: #f5f5f5";
      document.querySelector('.more-settings').style.backgroundColor="white";
      // document.querySelector('.loginbutton').style.backgroundColor=rgb(59, 191, 244);
      document.querySelector('.forgp').style.color="rgb(0,55,107)";
      hr1.style.border="3px solid #DBDBDB4D";
      hr2.style.border="1px solid #DBDBDB80";
    }
    updateIcons();
  }
  applyMode();
  mode.addEventListener("click",()=>{
    currMode=currMode==="light"?"dark":"light";
    localStorage.setItem("mode",currMode);
    applyMode();
  })
}
displayDarkMode();