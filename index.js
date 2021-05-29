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
    var blue = document.body;
    blue.classList.toggle("blue-mode");
}
