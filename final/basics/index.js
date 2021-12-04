const aboutBtn = document.getElementById("about-btn");
const creditsBtn = document.getElementById("credits-btn");

const aboutText = document.getElementById("about-text");
const creditsText = document.getElementById("credits-text");

const newsLetter = document.getElementById("news-letter-form");


aboutBtn.onclick = () => {
  if (aboutText.classList.contains("hidden")) {
    aboutText.classList.remove("hidden");
    aboutBtn.textContent = "Hide Text";
  } else {
    aboutText.classList.add("hidden");
    aboutBtn.textContent = "Show Text";
  }
}

creditsBtn.onclick = () => {
  if (creditsText.classList.contains("hidden")) {
    creditsText.classList.remove("hidden");
    creditsBtn.textContent = "Hide Text";
  } else {
    creditsText.classList.add("hidden");
    creditsBtn.textContent = "Show Text";
  }
}

newsLetter.onsubmit = (e) => {
  e.preventDefault();
  firstName = document.getElementById("first-name").value;
  lastName = document.getElementById("last-name").value;
  email = document.getElementById("user-email").value;

  alert("you are now added to our mail list " + firstName + " " + lastName)
  
}

