function home(){
    window.location.href="../Home Page/index.html";
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
        document.querySelectorAll('.light-set').forEach(lset=>{
            lset.style.display=currMode==="dark"? "none":"block";
        }); 
        document.querySelectorAll('.dark-set').forEach(lset=>{
            lset.style.display=currMode==="dark"? "block":"none";
        });
        document.querySelectorAll('.share-p').forEach(sharep=>{
          sharep.style.color=currMode==="dark"? "#A8A8A8":"rgb(115,115,115)";
        });
        document.querySelectorAll('.features-btn').forEach(featurebtn=>{
          featurebtn.style.backgroundColor=currMode==="dark"? "#262626":"white";
          featurebtn.style.color=currMode==="dark"? "white":"black";
          featurebtn.style.fontWeight=currMode==="dark"? "400":"400";
        });
        document.querySelectorAll('.hr3').forEach(hr3=>{
          hr3.style.border=currMode==="dark"? "1px solid rgb(51,51,51)":"1px solid #DBDBDB80";
        });
      }
    const hr1=document.getElementById('hr2');
    const hr2=document.getElementById('hrset');

    function applyMode(){
      if (currMode === "dark") {
        body.classList.add("dark");
        body.classList.remove("light");
        document.querySelector('.more-settings').style.backgroundColor="#262626";
        hr1.style.border="3px solid #5555554D";
        hr2.style.border="1px solid #55555580";
        document.querySelector('.edit-btn').style.backgroundColor="#363636";
        document.querySelector('.edit-btn').style.color="white";
        document.querySelector('.view-btn').style.backgroundColor="#363636";
        document.querySelector('.view-btn').style.color="white";
        document.querySelector('.thread-btn').style.backgroundColor="#363636";
        document.querySelector('.thread-btn').style.color="white";
        document.querySelector('#languages').style.backgroundColor="black";
        document.querySelector('.about').style.color="#A8A8A8";
        document.querySelector('.new1').style.color="white";
        document.querySelector('.insta-settings').style.backgroundColor="#262626";
        document.body.classList.add('dimmed1');
        document.body.classList.remove('dimmed2');
      } 
      else {
        body.classList.add("light");
        body.classList.remove("dark");
        document.querySelector('.more-settings').style.backgroundColor="white";
        hr1.style.border="3px solid #DBDBDB4D";
        hr2.style.border="1px solid #DBDBDB80";
        document.querySelector('.edit-btn').style.backgroundColor="#EFEFEF";
        document.querySelector('.edit-btn').style.color="black";
        document.querySelector('.view-btn').style.backgroundColor="#EFEFEF";
        document.querySelector('.view-btn').style.color="black";
        document.querySelector('.thread-btn').style.backgroundColor="#EFEFEF";
        document.querySelector('.thread-btn').style.color="black";
        document.querySelector('#languages').style.backgroundColor="white";
        document.querySelector('.about').style.color="rgb(115,115,115)";
        document.querySelector('.new1').style.color="black";
        document.querySelector('.insta-settings').style.backgroundColor="white";
        document.body.classList.remove('dimmed1');
        document.body.classList.add('dimmed2');
      }
      updateIcons();
    }
    applyMode();
    mode.addEventListener("click",()=>{
      currMode=currMode==="light"?"dark":"light";
      localStorage.setItem("mode",currMode);
      applyMode();
    });

  }
  displayDarkMode();
function toggleSettings(){
  const modal=document.getElementById('insta-setting');
  const background=document.getElementById('modalBackground');
  const body=document.body;

  if(modal.style.display==='block'){
    modal.style.display='none';
    background.style.display='none';
    body.classList.remove('dimmed1');
  }
  else{
    modal.style.display='block';
    background.style.display='block';
    body.classList.add('dimmed1');
  }
}
function cancel(){
  const body=document.body;
  document.querySelector('.insta-settings').style="display:none"
  body.classList.remove('dimmed1');
}
