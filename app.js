var cssMode = 0;

function showImage(imgs) {
  var expandImg = document.getElementById("fullImg");
  fullImg.src = imgs.src;
  fullImg.parentElement.style.display = "block";
}

function bringcolor(x) {
    x.style.filter = "none";
  }

function bringgray(x) {
    x.style.filter = "grayscale(100%)";
  }

function changeMode() {
  
  if (cssMode == 0) {
    document.getElementById("markMode").innerHTML = "Bright Mode";
    document.getElementById("styleMode").href = "css/darkmode.css";
    cssMode = 1;

    var cssLink = document.createElement("link");
    cssLink.href = "css/darkmode.css"; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css"; 
    frames["baseFrame"].document.head.appendChild(cssLink);

  } else {
    document.getElementById("markMode").innerHTML = "Dark Mode";
    document.getElementById("styleMode").href = "css/brightmode.css";
    cssMode = 0;

    var cssLink = document.createElement("link");
    cssLink.href = "css/brightmode.css"; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css"; 
    frames["baseFrame"].document.head.appendChild(cssLink);
  }  
}

