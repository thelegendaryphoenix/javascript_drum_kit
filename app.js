// Functions for Playing Sound and Transition Start/Stop
function playSound(e) {
  //Select items for audio and key press
  const audio = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"]`
  );
  const keyPress = document.querySelector(
    `.key[data-key="${e.key.toUpperCase()}"]`
  );
  //Action for keys without sounds, stop execution
  if (!audio) return;
  //Set the audio time to 0 so key can be pressed multiple times in a row
  audio.currentTime = 0;
  audio.play();
  keyPress.classList.add("playing");
}

function removeTransition(e) {
  //Stop execution if the property is not transform
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// Add the Event Listener on Key Down Actions
window.addEventListener("keydown", playSound);
// Add Event Listener on Keys for Transitioned Property
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
