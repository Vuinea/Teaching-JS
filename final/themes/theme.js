const themeBtn = document.querySelector("#theme-btn");

let theme = localStorage.getItem("app-theme");

// setting theme
if (theme) {
  themeBtn.classList.replace("btn-light", `btn-${theme}`);
  document.body.classList.replace("light", theme);
} else {
  theme = "light";
}

themeBtn.onclick = () => {
  if (theme === "light") {
    theme = "dark";
    document.body.classList.replace("light", "dark");
    themeBtn.classList.replace("btn-light", "btn-dark");
  } else {
    theme = "light";
    document.body.classList.replace("dark", "light");
    themeBtn.classList.replace("btn-dark", "btn-light");
  }
  localStorage.setItem("app-theme", theme);
}


