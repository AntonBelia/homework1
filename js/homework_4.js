//Task 1

// let blockFirestLine = document.getElementsByClassName('firstSection');
// let blockTwoHeader = document.getElementById('headerTwo');
// let blockTwoList = document.querySelector('ul li:nth-child(5)');
// let footerLevelCurrent = document.querySelectorAll('hatredLevelBlock');

//Task 2
let outputLastDate = document.getElementById("outputLastDate");
let toggleButton = document.getElementById("button");
let bgColorTheme = localStorage.getItem("bgColorTheme");
let lastToggleTime = localStorage.getItem("lastToggleTime");

function getFormattedDate() {
  let newDate = new Date();
  let day = ("0" + newDate.getDate()).slice(-2);
  let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  let year = newDate.getFullYear();
  let hours = ("0" + newDate.getHours()).slice(-2);
  let minutes = ("0" + newDate.getMinutes()).slice(-2);
  let seconds = ("0" + newDate.getSeconds()).slice(-2);
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

console.log(getFormattedDate());

if (!bgColorTheme || !lastToggleTime) {
  lastToggleTime = "";
  bgColorTheme = "light";
  localStorage.setItem("lastToggleTime", lastToggleTime);
  localStorage.setItem("bgColorTheme", bgColorTheme);
}

document.body.classList.add(bgColorTheme);

toggleButton.textContent = bgColorTheme === "light" ? "Turn off" : "Turn on";

if (bgColorTheme === "light") {
    outputLastDate.textContent = "Last turn off: " + lastToggleTime;
  } else {
    outputLastDate.textContent = "Last turn on: " + lastToggleTime;
  }

  toggleButton.addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      toggleButton.textContent = "Turn on";
      outputLastDate.textContent = "Last turn off: " + getFormattedDate();

      lastToggleTime = getFormattedDate();
      bgColorTheme = "dark";
      localStorage.setItem("lastToggleTime", lastToggleTime);
      localStorage.setItem("bgColorTheme", bgColorTheme);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      toggleButton.textContent = "Turn off";
      outputLastDate.textContent = "Last turn on: " + getFormattedDate();
  
      lastToggleTime = getFormattedDate();
      bgColorTheme = "light";
      localStorage.setItem("lastToggleTime", lastToggleTime);
      localStorage.setItem("bgColorTheme", bgColorTheme);
    }
  });