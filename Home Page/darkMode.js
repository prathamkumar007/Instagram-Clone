function displayDarkMode() {
  let mode = document.getElementById("darkMode");
  let currMode = "light";
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
  }
  mode.addEventListener("click", () => { 
    if (currMode === "light") {
      currMode = "dark";
      body.classList.add("dark");
      body.classList.remove("light");
      document.querySelector('.login-modal').classList.add("showDark");
      document.getElementById('username').classList.add("inputs-dark");
      document.getElementById('password').classList.add("inputs-dark");
      document.getElementById('username').style = "border: none; background-color: #1a1a1a";
      document.getElementById('password').style = "border: none; background-color: #1a1a1a";
    } 
    else {
      currMode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
      document.querySelector('.login-modal').classList.remove("showDark");
      document.getElementById('username').classList.remove("inputs-dark");
      document.getElementById('password').classList.remove("inputs-dark");
      document.getElementById('username').style = "border: 1px solid grey; background-color: #f5f5f5";
      document.getElementById('password').style = "border: 1px solid grey; background-color: #f5f5f5";
    }
    updateIcons();
  });
}
displayDarkMode();