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
const addSignature = (e) =>{
  

     let name = document.getElementById("Name").value;
        let hometown = document.getElementById("HomeTown").value;
        let signaturesSection = document.querySelector(".signatures");
        const newSignature = document.createElement("p");
        newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;
        signaturesSection.appendChild(newSignature);
       e.preventDefault();

}
signNowButton.addEventListener ("click",addSignature)


// const validateForm = () => {

//   let containsErrors = false;

//   var petitionInputs = document.getElementById("sign-petition").elements;
//   // TODO: Loop through all inputs


//   // TODO: Validate the value of each input



//   // TODO: Call addSignature() and clear fields if no errors

// }

// signNowButton.addEventListener('click', validateForm());