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

let blurButton = document.querySelectorAll(".blurButton");
blurButton.forEach(blurButton=>{
  blurButton.addEventListener("click",function(){
    let blur = document.querySelector("#blur");
    blur.classList.toggle("active");

    let contactForm = document.querySelector("#contactForm");
    contactForm.classList.toggle("active")

  })
})

let darkMode = document.querySelector("#darkMode");
darkMode.addEventListener('click',function(){
  let darkModeColor = document.querySelector("#darkModeColor");
  darkModeColor.classList.toggle("active");
})