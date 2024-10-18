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
    document.querySelectorAll('.icon').forEach(icon => {
        icon.style.display = currMode === "dark" ? "block" : "none";
    });
    document.querySelectorAll('.post-likes').forEach(post => {
        post.style.color = currMode === "dark" ? "white" : "black";
    });
  }
  mode.addEventListener("click", () => {
    if (currMode === "light") {
      currMode = "dark";
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      currMode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
    }
    updateIcons();
  });
}
displayDarkMode();