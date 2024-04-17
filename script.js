let buttonData = document.querySelector("[data-butt]")
let button = document.getElementById("resources")
let filled = document.querySelector(".filled");
button.addEventListener("click", function() {
  if (buttonData.dataset.butt === "false") {
    window.alert("You have not signed up for this feature")
  } else {
    button.setAttribute("href", "./re/Resources.html")
  }
})

function update() {
  filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
  requestAnimationFrame(update);
}
update();

let blurButton = document.querySelectorAll(".blurButton");
blurButton.forEach(blurButton => {
  blurButton.addEventListener("click", function() {
    let blur = document.querySelector("#blur");
    blur.classList.toggle("active");

    let contactForm = document.querySelector("#contactForm");
    contactForm.classList.toggle("active")

  })
})

let darkMode = document.querySelector("#darkMode");
darkMode.addEventListener('click', function() {
  let darkModeColor = document.querySelector("#darkModeColor");
  darkModeColor.classList.toggle("active");
  darkMode.innerHTML = darkMode.innerHTML === "Dark mode" ? "Light mode" : "Dark mode";
})

let about = document.querySelector(".about");
let aboutMission = document.querySelector(".aboutMission");
let aboutSignBOX = document.querySelector(".aboutSignBOX");
let aboutSign = document.querySelector(".aboutSign");
aboutMission.addEventListener("click", function() {
  about.classList.toggle("activeMission");
})

let signNowButton = document.querySelector("#sign-now-button")
let count = 3;
const addSignature = () =>{
  

     let name = document.getElementById("Name").value;
        let hometown = document.getElementById("HomeTown").value;
        let signaturesSection = document.querySelector(".signatures");
        const newSignature = document.createElement("p");
        newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;
        signaturesSection.appendChild(newSignature);

}


const validateForm = (e) => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length-1; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  console.log(petitionInputs)
  if(containsErrors == false){
    addSignature();
     for (let i = 0; i < petitionInputs.length; i++) {
       petitionInputs[i].value = "";
       containsErrors = false;
     }
  }

  
e.preventDefault()
}

let animation = {
  revealDistance: 50,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}
let addReveal = () =>{
  let what = document.querySelectorAll(".what > *");
  let importance = document.querySelectorAll(".importance > *")
  let about = document.querySelectorAll(".about > *");
  what.forEach((element) => element.classList.add("revealable"))
  importance.forEach((element) => element.classList.add("revealable"))
  about.forEach((element) => element.classList.add("revealable"))
}
window.addEventListener("load",addReveal)
let revealableContainers = document.getElementsByClassName("revealable");

let reveal = () =>{
  console.log(revealableContainers)
  for(let i=0;i<revealableContainers.length;i++){
    let windowHeight=window.innerHeight;
    console.log(revealableContainers);
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    console.log(topOfRevealableContainer)
    console.log(windowHeight-animation.revealDistance)
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("activeScroll");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("activeScroll");
    }
  }
}
window.addEventListener("scroll", reveal);
signNowButton.addEventListener('click', validateForm);