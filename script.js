let buttonData = document.querySelector("[data-butt]")
let button = document.getElementById("resources")

button.addEventListener("click", function(){
  if(buttonData.dataset.butt === "false"){
    window.alert("You have not signed up for this feature")
  }else{
    button.setAttribute("href","./re/Resources.html")
  }
})