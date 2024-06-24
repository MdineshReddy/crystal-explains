function changeTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === null) {
    localStorage.setItem("theme", "dark");
    activateDarkTheme();
  } else {
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      activateLightTheme();
    } else {
      localStorage.setItem("theme", "dark");
      activateDarkTheme();
    }
  }
}

function activateDarkTheme() {
  document.documentElement.style.setProperty("--body-background-color", "#444");
  document.documentElement.style.setProperty("--div-background-color", "#222");
  document.documentElement.style.setProperty(
    "--header-text-shadow-color",
    "#eee"
  );
  document.documentElement.style.setProperty("--body-text-color", "#eee");
  document.documentElement.style.setProperty("--box-shadow", "#333");
  document.documentElement.style.setProperty("--card-background", "#000");
  document.documentElement.style.setProperty("--card-text", "#eee");
  document.documentElement.style.setProperty("--table-even-background", "#333");

  document.documentElement.style.setProperty("--text-color", "#bbbaba");

  document.documentElement.style.setProperty("--card-color", "#17141d");

  document.documentElement.style.setProperty("--card-box-shadow", "#000");

  document.documentElement.style.setProperty("--card-h2-color", "#fff");

  document.getElementsByClassName("phone-img")[0].src =
    "../images/home/dark_mode_phone.png";
}

function activateLightTheme() {
  document.documentElement.style.setProperty(
    "--body-background-color",
    "#e9e9e9"
  );
  document.documentElement.style.setProperty("--div-background-color", "#fff");
  document.documentElement.style.setProperty(
    "--header-text-shadow-color",
    "#262f31"
  );
  document.documentElement.style.setProperty("--body-text-color", "#333");
  document.documentElement.style.setProperty("--box-shadow", "#aaaaaa");
  document.documentElement.style.setProperty("--card-background", "#333");
  document.documentElement.style.setProperty("--card-text", "#e9e9e9");
  document.documentElement.style.setProperty(
    "--table-even-background",
    "#d5dada"
  );
  document.documentElement.style.setProperty("--text-color", "#333");

  document.documentElement.style.setProperty("--card-color", "#f3f3f3");

  document.documentElement.style.setProperty("--card-box-shadow", "#e3e3e3");

  document.documentElement.style.setProperty("--card-h2-color", "#000");

  document.getElementsByClassName("phone-img")[0].src =
    "../images/home/light_mode_phone.png";
}

window.addEventListener("load", () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme !== null) {
    if (currentTheme === "dark") {
      activateDarkTheme();
    } else {
      activateLightTheme();
    }
  }
});

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
// });
