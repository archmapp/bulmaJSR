// （landscapeやportraitも利用可）

const landscapeMQ = window.matchMedia("(orientation: landscape)");

const noticeMessage = document.getElementById("notice");
const start = document.getElementById("start");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    noticeMessage.style.display = "none";
    start.style.display = "block";
  } else {
    noticeMessage.style.display = "block";
    start.style.display = "none";
  }
}

// Register event listener
// landscapeMQ.addEventListener(handleTabletChange)
landscapeMQ.addListener(handleTabletChange);

// Initial check
handleTabletChange(landscapeMQ);