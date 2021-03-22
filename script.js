
function showKM(){
var temp = document.getElementById("milesEntered").value
if (temp == ""){
  document.getElementById("placeh").innerHTML = "No Value Entered";
}else {
  document.getElementById("placeh").innerHTML = (temp + " Miles = " + (temp * 1.60934) + " Kilometer");
}

}

function register(){
    document.getElementById("milesEntered").value = "";
    document.getElementById("placeh").innerHTML = "";
}


function nextImg2(){
  var gel = document.querySelector("img");
  gel.src = "images/speedo2.png";

  var backG2 = document.querySelector("link");
  backG2.href = "style.css";
}

function nextImg3(){
  var fel = document.querySelector("img");
  fel.src = "images/speedometer-gif.gif";

  var backG = document.querySelector("link");
  backG.href = "style2.css";
}
