var block = document.getElementById("block")
var player = document.getElementById("player")
function jump() {
    if(player.classList != "anima") {
    player.classList.add("anima");
    }
    setTimeout(function(){
        player.classList.remove("anima")
    },1000)
}
var die = setInterval(function() {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<120 && blockLeft>0 && playerTop>=270){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose,");
        location.reload();
        
    }
}, 10);