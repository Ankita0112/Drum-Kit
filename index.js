

var numOfDrums= document.querySelectorAll(".drum").length;


for(var i=0;i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        sound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("keydown",function(event){
    sound(event.key);
    buttonAnimation(event.key);

})
function sound(key){
    switch (key) {
        case "a":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "s":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "d":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        case "f":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
    
        case "g":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
    
        case "h":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
        case "j":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
               
        default: console.log(key);
               
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}
