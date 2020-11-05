
// var formbutton = document.getElementById('button');
// formbutton.addEventListener('click', pickNumber, false);

// var guessNumber = document.getElementById('guessNumber');
// var guessInput = document.getElementById('guess_input');

// function showLabel (e) {
//     target = e.target;
//     textEntered = target.value;
//     guessNumber.textContent = textEntered;
// }


// document.addEventListener('DOMContentLoaded', function(eventObject) {
//     document.getElementById('button').addEventListener('click', getInputValue)
// }) 



// Get a random number
function makeguess () {
    var secretNumber = Math.floor((Math.random() * 10) + 1);
    console.log(secretNumber);
        return secretNumber;
}

var the_number = makeguess();

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("guess_input").value;
    // Convert string to a number
    inputVal= parseInt(inputVal);
    
    // Check if the input value is mathing with the random number and write it to the page
    if (inputVal === the_number) {
        console.log("You got it")
        var rightguess = document.getElementById("response")
        rightguess.innerHTML = "You got it"
        rightguess.setAttribute('class', 'youGuessed')
        document.getElementById("newGameResult").innerHTML="<img src=/Users/George/Desktop/win.gif>"
    }
    else if (inputVal > the_number){
        console.log("Too high")
        var highguess = document.getElementById("response")
        highguess.innerHTML = "Too high"
        highguess.setAttribute('class', 'tooHigh')
    }
    else if (inputVal < the_number){
        console.log("Too low")   
        var lowguess = document.getElementById("response")
        lowguess.innerHTML = "Too low"
        lowguess.setAttribute('class', 'tooLow')
    } 
}

document.getElementById('button').addEventListener('click', getInputValue)

var newGameButton = document.getElementById("newGame");
var result = document.getElementById("newGameResult");

newGameButton.addEventListener('click', function(){
    result.innerText = ""
    // container.style.backgroundColor = "#DDD";
    document.getElementById("guess_input").value = '';
    the_number = Math.floor((Math.random() * 10) + 1);
    var clear = document.getElementById("response");
    clear.innerHTML = '';
    console.log(the_number);
});

