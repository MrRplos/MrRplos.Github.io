console.log('hi');
document.getElementById("p1")
var Numbers = {
    aNumber: 5,
    aNumber2: 13
};
var aNumber = 5;
var aNumber2 = 13;
console.log(aNumber + aNumber2 * (aNumber2 - aNumber) + aNumber2 + 0.6 )
console.log(Numbers);

function numberPod(num) {
    return num > 0 ? "Postive" : num < 0 ? "Neg" : "Zero"
}

console.log(numberPod(-5));

let myName = "Omran";

if(myName == "Omran") {
    console.log('Yep');
} else {
    console.log('Nope');
}
function play() {
    var sound = document.getElementById('audio');
    sound.play();
}
function blue() {
    var green = document.getElementById('blue');
    green.classList.toggle("green-mode");
    var blue = document.body;
    blue.classList.toggle("blue-mode");
}
function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
    var tomato = document.getElementById('Mostthings');
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more";
      moreText.style.display = "none";
      btnText.style.top = "33em";
      tomato.style.top = "7em";
      tomato.style.transitionDuration = "500ms";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "block";
      btnText.style.top = "100%";
      tomato.style.top = "6.5em";
      tomato.style.transitionDuration = "500ms";
    }
  }
