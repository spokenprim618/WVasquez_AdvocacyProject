let buttonData = document.querySelector("[data-butt]")
let button = document.getElementById("resources")
let filled = document.querySelector(".filled");
button.addEventListener("click", function(){
  if(buttonData.dataset.butt === "false"){
    window.alert("You have not signed up for this feature")
  }else{
    button.setAttribute("href","./re/Resources.html")
  }
})

function update(){
  filled.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`;
  requestAnimationFrame(update);
}
update();