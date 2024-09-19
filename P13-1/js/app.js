//Document Elements
//looks for "text0". Assigns that to the variable called textField0.
const textField0 = document.getElementById("text0");

//Buttons
const increaseScorebutton = document.getElementById("button0");

//Internal Variables
let score= 0;

//Process
increaseScorebutton.addEventListener("click", function(){
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
})

//controllers
function increaseScoreByOne () {
  score++;
}

function checkScoreForSeven() {
  if (score >=7){
   changeScoreTextColorToGreen();
  }
}

//View
function updateScoreText () {
  textField0.innerHTML = "Your score is: " + score;
}

function changeScoreTextColorToGreen () {
  textField0.style.color= "green";
}
