let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    $(`#${randomChosenColour}`).click(function() {
        const audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
        audio.play();
      });
      handler();
    }
function handler(){
    // $("button").click(function() {
        let userChosenColour = this.id; // or alert($(this).attr('id'));
    // });
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
}
nextSequence();